import { GoogleGenerativeAI } from "@google/generative-ai";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";
import { sampleProjects } from "../../data/projects";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message, persona, userId = "anonymous" } = await req.json();

    // 1. Simple RAG: Inject project data as context
    const context = JSON.stringify(sampleProjects.map(p => ({
      title: p.title,
      subject: p.subject,
      description: p.description,
      milestones: p.milestones.map(m => m.title)
    })));

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `You are Krushiv AI, a premium academic mentor for CBSE students, teachers, and parents.
      Current Persona: ${persona}
      Available Projects Context: ${context}
      
      Your tone is encouraging, organic, and expert. 
      - If student: Help them build projects, suggest materials, and explain concepts.
      - If teacher: Help review work and suggest pedagogy.
      - If parent: Provide progress updates and suggestions for support.
      
      Always refer to specific projects from the context if relevant.`
    });

    // 2. Get Chat Response
    const result = await model.generateContent(message);
    const responseText = result.response.text();

    // 3. Save to Firestore (Database Connection)
    if (db) {
      await addDoc(collection(db, "chats"), {
        userId,
        persona,
        userMessage: message,
        aiResponse: responseText,
        timestamp: serverTimestamp(),
      });
    }

    return NextResponse.json({ text: responseText });
  } catch (error: any) {
    console.error("Chat Error:", error);
    return NextResponse.json({ error: "Failed to connect to Krushiv AI" }, { status: 500 });
  }
}
