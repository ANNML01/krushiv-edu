import Image from "next/image";
import { sampleProjects } from "../data/projects";

export default function Home() {
  const activeProjects = sampleProjects.filter(p => p.progress > 0 && p.progress < 100);
  const trendingTemplates = sampleProjects.filter(p => p.progress === 0);

  const mentors = [
    { id: 1, name: "Dr. Ananya", subject: "Physics", rating: 4.9, emoji: "👩‍🏫" },
    { id: 2, name: "Prof. Rahul", subject: "Social Science", rating: 4.8, emoji: "👨‍🏫" },
  ];

  const categories = [
    { name: "Science", icon: "🔬", color: "bg-blue-50 text-blue-600" },
    { name: "Math", icon: "📐", color: "bg-yellow-50 text-yellow-600" },
    { name: "History", icon: "📜", color: "bg-orange-50 text-orange-600" },
    { name: "Art", icon: "🎨", color: "bg-pink-50 text-pink-600" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-24">
      {/* Dashboard Header */}
      <header className="pt-10">
         <div className="badge-grade mb-4">Student Dashboard</div>
         <h1 className="text-4xl md:text-5xl font-black outfit text-[#2c004d]">
            Welcome back, <span className="text-primary">Anil</span> 👋
         </h1>
         <p className="text-lg text-foreground/50 font-medium mt-2">You have 2 projects due this month. Let's finish them!</p>
      </header>

      {/* 1. Project Laboratory Section */}
      <section id="laboratory" className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black outfit text-[#2c004d]">Your Active Projects</h2>
          <button className="btn-primary py-2 px-6 text-sm">New Project</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {activeProjects.map(project => (
              <a href={`/projects/${project.id}`} key={project.id} className="byju-card group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {project.emoji}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${project.progress > 50 ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                    {project.subject}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-6 text-[#2c004d]">{project.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold opacity-40">
                    <span>PROGRESS</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="lg:col-span-1">
             <div className="byju-card bg-primary text-white border-none shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                   <div className="text-4xl mb-6">🤖</div>
                   <h3 className="text-xl font-black mb-4">Krushiv AI Assistant</h3>
                   <p className="text-sm opacity-80 mb-8 leading-relaxed">
                      "I've found a great case study for your Sustainable City project! Want to integrate it?"
                   </p>
                   <button className="w-full py-3 rounded-xl bg-white text-primary font-black text-sm hover:bg-opacity-90 transition-all">
                      Check Insight
                   </button>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. CBSE Knowledge Bank Section */}
      <section id="knowledge-bank" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 className="text-2xl font-black outfit text-[#2c004d]">CBSE Learning Bank</h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {categories.map(cat => (
              <button key={cat.name} className={`flex-shrink-0 px-5 py-2 rounded-full font-bold text-xs transition-all hover:shadow-sm ${cat.color}`}>
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingTemplates.map(template => (
            <a href={`/projects/${template.id}`} key={template.id} className="byju-card">
              <div className="text-3xl mb-4">{template.emoji}</div>
              <h4 className="font-black text-base mb-2 text-[#2c004d]">{template.title}</h4>
              <p className="text-[10px] font-bold text-primary mb-4">{template.subject} • {template.level}</p>
              <div className="flex justify-between items-center pt-4 border-t border-muted">
                <span className="text-[10px] font-black opacity-30 tracking-widest uppercase">Premium</span>
                <span className="text-xs font-black text-primary">View →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3. Mentor Network Section */}
      <section id="mentors" className="space-y-8 pb-20">
        <h2 className="text-2xl font-black outfit text-[#2c004d]">Expert Mentor Support</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {mentors.map(mentor => (
            <div key={mentor.id} className="byju-card flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl">
                {mentor.emoji}
              </div>
              <div>
                <h4 className="font-black text-base text-[#2c004d]">{mentor.name}</h4>
                <p className="text-[10px] font-bold opacity-40 mb-2">{mentor.subject} Expert</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-yellow-500">⭐ {mentor.rating}</span>
                  <div className="w-1 h-1 rounded-full bg-muted"></div>
                  <span className="text-[10px] font-black text-green-500">Available</span>
                </div>
              </div>
            </div>
          ))}
          <div className="byju-card bg-muted border-dashed border-2 flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 cursor-pointer">
             <p className="text-xs font-black uppercase tracking-widest">Connect More</p>
          </div>
        </div>
      </section>
    </div>
  );
}
