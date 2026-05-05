"use client";

import Image from "next/image";
import { usePersona, Persona } from "../context/PersonaContext";
import { sampleProjects } from "../data/projects";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const { persona, setPersona } = usePersona();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* Persona Switcher (For Demo) */}
      <div className="fixed bottom-10 right-10 z-[100] flex gap-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-border shadow-2xl">
         {(['student', 'teacher', 'parent'] as Persona[]).map(p => (
           <button 
             key={p} 
             onClick={() => setPersona(p)}
             className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${persona === p ? 'bg-primary text-white' : 'hover:bg-muted'}`}
           >
             {p}
           </button>
         ))}
      </div>

      {persona === 'student' && <StudentDashboard />}
      {persona === 'teacher' && <TeacherDashboard />}
      {persona === 'parent' && <ParentDashboard />}
    </div>
  );
}

function StudentDashboard() {
  const activeProjects = sampleProjects.filter(p => p.progress > 0 && p.progress < 100);
  const trendingTemplates = sampleProjects.filter(p => p.progress === 0);

  return (
    <div className="space-y-24">
      <header className="space-y-6">
         <span className="section-label">Student Workspace</span>
         <h1 className="text-5xl md:text-7xl font-black outfit tracking-tight">
            Greetings, <span className="text-organic">Anil</span>.
         </h1>
         <p className="text-xl text-foreground/50 font-medium max-w-xl">
            The garden of your academic projects is flourishing. You have {activeProjects.length} active drafts.
         </p>
      </header>

      <section className="space-y-12">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <h2 className="text-4xl font-black outfit">Active Laboratory</h2>
          <button className="btn-organic py-3 px-8 text-sm">New Seed</button>
        </div>
        <StaggerContainer>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {activeProjects.map(project => (
              <StaggerItem key={project.id}>
                <a href={`/projects/${project.id}`} className="editorial-card group hover:bg-white transition-all block">
                  <div className="flex justify-between items-start mb-12">
                    <div className="text-5xl group-hover:scale-110 transition-transform">{project.emoji}</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">{project.subject}</div>
                  </div>
                  <h3 className="text-3xl font-black mb-8 leading-tight">{project.title}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black opacity-30 uppercase tracking-widest">
                      <span>Maturity</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </div>
          <StaggerItem>
             <div className="editorial-card bg-primary text-white border-none h-full flex flex-col justify-between">
                <div className="space-y-6">
                   <div className="text-4xl">🤖</div>
                   <h3 className="text-2xl font-black outfit">Agentic Bot</h3>
                   <p className="text-lg opacity-70 font-medium leading-relaxed">
                      "I've found a new resource for your Science project. Want to review it now?"
                   </p>
                </div>
                <button className="w-full py-4 rounded-2xl bg-white text-primary font-black text-sm hover:scale-105 transition-all">Review Insight</button>
             </div>
          </StaggerItem>
        </div>
        </StaggerContainer>
      </section>
    </div>
  );
}

function TeacherDashboard() {
  const submissions = [
    { id: 1, student: "Anil K.", project: "Sustainable City", status: "pending", date: "2 hours ago" },
    { id: 2, student: "Priya S.", project: "Smart Irrigation", status: "reviewed", date: "1 day ago" },
    { id: 3, student: "Rahul M.", project: "Math in Art", status: "pending", date: "5 hours ago" },
  ];

  return (
    <div className="space-y-24">
      <header className="space-y-6">
         <span className="section-label">Mentor Dashboard</span>
         <h1 className="text-5xl md:text-7xl font-black outfit tracking-tight">
            Review <span className="text-organic">Queue</span>.
         </h1>
         <p className="text-xl text-foreground/50 font-medium max-w-xl">
            You have {submissions.filter(s => s.status === 'pending').length} new submissions to review across your subjects.
         </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-3xl font-black outfit">Pending Reviews</h2>
        <div className="space-y-4">
           {submissions.map(s => (
             <div key={s.id} className="editorial-card p-8 flex items-center justify-between group cursor-pointer hover:bg-white transition-all">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-xl">👤</div>
                   <div>
                      <h4 className="font-black text-xl">{s.student}</h4>
                      <p className="text-xs font-bold opacity-40 uppercase tracking-widest">{s.project}</p>
                   </div>
                </div>
                <div className="flex items-center gap-8">
                   <span className="text-xs font-black opacity-30">{s.date}</span>
                   <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${s.status === 'pending' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>
                      {s.status}
                   </div>
                   <button className="text-xl group-hover:translate-x-2 transition-transform">➔</button>
                </div>
             </div>
           ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
         <div className="editorial-card bg-secondary text-white border-none">
            <h3 className="text-2xl font-black mb-6">Class Analytics</h3>
            <div className="space-y-6">
               <div className="flex justify-between items-center">
                  <span className="text-sm font-bold opacity-70">Average Grade</span>
                  <span className="text-2xl font-black">A-</span>
               </div>
               <div className="h-1 w-full bg-white/20 rounded-full">
                  <div className="h-full bg-white w-3/4 rounded-full"></div>
               </div>
               <p className="text-xs opacity-60">Concept clarity is up by 15% this week.</p>
            </div>
         </div>
         <div className="editorial-card border-dashed">
            <h3 className="text-2xl font-black mb-6">Subject Insights</h3>
            <p className="text-foreground/50 font-medium mb-8">Krushiv AI has identified that students are struggling with "Electromagnetic Induction" experiments.</p>
            <button className="btn-organic text-xs">Generate Extra Material</button>
         </div>
      </section>
    </div>
  );
}

function ParentDashboard() {
  const activity = [
    { day: "Monday", progress: 10, detail: "Started Sustainable City project" },
    { day: "Tuesday", progress: 25, detail: "Completed Milestone 1" },
    { day: "Wednesday", progress: 40, detail: "Consulted Krushiv AI for research" },
  ];

  return (
    <div className="space-y-24">
      <header className="space-y-6">
         <span className="section-label">Guardian View</span>
         <h1 className="text-5xl md:text-7xl font-black outfit tracking-tight">
            Anil's <span className="text-organic">Progress</span>.
         </h1>
         <p className="text-xl text-foreground/50 font-medium max-w-xl">
            Your child is on track for their internal assessments. No urgent actions required.
         </p>
      </header>

      <section className="grid lg:grid-cols-3 gap-12">
         <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-black outfit">Weekly Activity</h2>
            <div className="space-y-4">
               {activity.map((a, i) => (
                 <div key={i} className="editorial-card p-6 flex items-center gap-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary">{a.progress}%</div>
                    <div>
                       <h4 className="font-black text-lg">{a.day}</h4>
                       <p className="text-sm font-medium opacity-50">{a.detail}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
         <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-black outfit">At a Glance</h2>
            <div className="editorial-card bg-accent/10 border-none space-y-8">
               <div>
                  <h4 className="text-xs font-black uppercase tracking-widest opacity-30 mb-2">Upcoming Deadline</h4>
                  <p className="text-xl font-black">Science Project • 12 May</p>
               </div>
               <div>
                  <h4 className="text-xs font-black uppercase tracking-widest opacity-30 mb-2">Mentor Feedback</h4>
                  <p className="text-lg font-bold">"Excellent work on the energy grid model. Needs more detail in the report."</p>
               </div>
               <button className="w-full btn-organic text-xs py-4">Message Mentor</button>
            </div>
         </div>
      </section>
    </div>
  );
}
