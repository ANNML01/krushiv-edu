import Image from "next/image";

export default function Home() {
  const activeProjects = [
    { id: 1, title: "Social Issues in India", type: "Social Science", progress: 65, status: "Drafting" },
    { id: 2, title: "Hydraulic Arm Model", type: "Physics", progress: 30, status: "Research" },
  ];

  const trendingProjects = [
    { id: 3, title: "Biodiversity of Western Ghats", level: "Class 12", subject: "Biology", rating: 4.8 },
    { id: 4, title: "Consumer Rights Awareness", level: "Class 10", subject: "Economics", rating: 4.9 },
    { id: 5, title: "Sustainable Energy Solutions", level: "Class 11", subject: "Science", rating: 4.7 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl p-8 md:p-16 mb-12 glass-card">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/20 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold outfit mb-6 leading-tight">
              Master Your <span className="text-gradient">Academic Projects</span> with Krushiv
            </h1>
            <p className="text-lg text-white/60 mb-8 max-w-lg">
              The only platform that combines CBSE guidelines, AI-powered guidance, and creative tools to ensure your success.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-gradient font-bold hover:scale-105 transition-transform shadow-lg shadow-purple-500/25">
                Start New Project
              </button>
              <button className="px-8 py-4 rounded-full glass border border-white/10 font-bold hover:bg-white/5 transition-all">
                Browse Templates
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            <div className="relative w-72 h-72 animate-float">
               {/* Friendly AI Bot Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full glass rounded-full flex items-center justify-center border border-white/20">
                <span className="text-8xl">🤖</span>
                <div className="absolute -bottom-4 right-0 glass px-4 py-2 rounded-2xl border border-white/10 text-xs font-bold uppercase tracking-widest">
                  Krushiv AI Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="flex-1 glass px-6 py-4 rounded-2xl border border-white/10 flex items-center gap-4 focus-within:border-purple-500/50 transition-colors">
          <span className="opacity-50">🔍</span>
          <input 
            type="text" 
            placeholder="Search for CBSE projects (e.g. Class 10 Science, History)..." 
            className="bg-transparent border-none outline-none w-full text-white placeholder:text-white/30"
          />
        </div>
        <select className="glass px-6 py-4 rounded-2xl border border-white/10 bg-transparent outline-none">
          <option>All Subjects</option>
          <option>Science</option>
          <option>Math</option>
          <option>Social Science</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Active Projects */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold outfit mb-6 flex items-center gap-2">
            My Projects <span className="text-sm font-normal text-white/40 ml-2">({activeProjects.length})</span>
          </h2>
          <div className="space-y-4">
            {activeProjects.map(project => (
              <div key={project.id} className="glass-card p-6 border border-white/10 rounded-2xl group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-purple-400 mb-1 block">{project.type}</span>
                    <h3 className="font-bold group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  </div>
                  <span className="text-xs glass px-2 py-1 rounded-md">{project.status}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-white/40">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient transition-all duration-1000" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full py-4 rounded-2xl border border-dashed border-white/20 text-white/40 font-medium hover:border-purple-500/50 hover:text-purple-400 transition-all">
              + Add Project
            </button>
          </div>
        </div>

        {/* Trending Projects */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold outfit mb-6 flex items-center gap-2">
            Trending Templates <span className="text-sm font-normal text-white/40 ml-2">Recommended for you</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {trendingProjects.map(project => (
              <div key={project.id} className="glass-card p-6 border border-white/10 rounded-3xl group">
                <div className="aspect-video mb-6 bg-gradient rounded-2xl overflow-hidden relative opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50 group-hover:scale-110 transition-transform">📚</div>
                </div>
                <div className="flex justify-between items-center mb-2">
                   <span className="text-xs font-bold text-purple-400">{project.level}</span>
                   <div className="flex items-center gap-1 text-xs font-bold">
                     <span className="text-yellow-400">⭐</span> {project.rating}
                   </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">{project.subject}</span>
                  <button className="p-2 rounded-full glass hover:bg-purple-500 transition-colors">
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
