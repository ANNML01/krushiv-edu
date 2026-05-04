"use client";

import { useState, useRef, useEffect } from "react";

export default function StudioPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startCamera = async () => {
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(s);
      if (videoRef.current) {
        videoRef.current.srcObject = s;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const startRecording = () => {
    if (stream) {
      setRecordedChunks([]);
      const options = { mimeType: "video/webm;codecs=vp9,opus" };
      const recorder = new MediaRecorder(stream, options);
      
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "krushiv-educational-short.webm";
        // In a real app, we'd show a preview first
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold outfit mb-4">Krushiv <span className="text-gradient">Studio</span></h1>
        <p className="text-white/60">Create engaging educational shorts for social media in seconds.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        
        {/* Left: Tools */}
        <div className="space-y-6">
          <div className="glass-card p-6 border border-white/10 rounded-3xl">
            <h3 className="font-bold mb-4">Overlays</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 glass rounded-xl border border-white/5 text-xs hover:border-purple-500">Project Title</button>
              <button className="p-3 glass rounded-xl border border-white/5 text-xs hover:border-purple-500">Progress Bar</button>
              <button className="p-3 glass rounded-xl border border-white/5 text-xs hover:border-purple-500">Milestone Badge</button>
              <button className="p-3 glass rounded-xl border border-white/5 text-xs hover:border-purple-500">AI Captions</button>
            </div>
          </div>
          
          <div className="glass-card p-6 border border-white/10 rounded-3xl">
            <h3 className="font-bold mb-4">Music/Voice</h3>
            <button className="w-full p-4 glass rounded-xl border border-white/5 text-sm mb-3 text-left flex items-center gap-3">
              <span>🎵</span> Lo-fi Study Beats
            </button>
            <button className="w-full p-4 glass rounded-xl border border-white/5 text-sm text-left flex items-center gap-3">
              <span>🎙️</span> AI Narration
            </button>
          </div>
        </div>

        {/* Middle: Preview/Recording */}
        <div className="relative aspect-[9/16] bg-black rounded-[40px] overflow-hidden border-[8px] border-white/5 shadow-2xl">
          <video 
            ref={videoRef} 
            autoPlay 
            muted 
            playsInline 
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          
          {/* Overlay Elements Simulation */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start">
              <div className="glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-purple-400 border border-purple-500/30">
                Krushiv Studio
              </div>
              {isRecording && <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] font-bold">REC</span>
              </div>}
            </div>

            <div className="space-y-4">
              <div className="glass p-4 rounded-2xl border border-white/10 translate-y-4">
                <h4 className="text-sm font-bold mb-1">Building the Hydraulic Arm</h4>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-1/3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Record Button */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <button 
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-16 h-16 rounded-full border-4 border-white flex items-center justify-center transition-all ${isRecording ? 'scale-90 opacity-80' : 'hover:scale-110'}`}
            >
              <div className={`transition-all ${isRecording ? 'w-6 h-6 rounded-sm bg-red-500' : 'w-12 h-12 rounded-full bg-red-500'}`}></div>
            </button>
          </div>
        </div>

        {/* Right: Settings */}
        <div className="glass-card p-6 border border-white/10 rounded-3xl">
          <h3 className="font-bold mb-4">Export Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] uppercase font-bold text-white/40 block mb-2">Format</label>
              <select className="w-full glass p-3 rounded-xl border border-white/5 bg-transparent text-sm">
                <option>Vertical (9:16) - Reels/Shorts</option>
                <option>Square (1:1) - Post</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-white/40 block mb-2">Quality</label>
              <select className="w-full glass p-3 rounded-xl border border-white/5 bg-transparent text-sm">
                <option>1080p (HD)</option>
                <option>720p</option>
              </select>
            </div>
            <button className="w-full py-4 rounded-2xl bg-gradient font-bold mt-6">
              Download Video
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
