import Image from "next/image";

export default function LandingPage() {
  const grades = [
    { class: "Class 9", desc: "Foundation & Skills", color: "bg-blue-50 text-blue-600" },
    { class: "Class 10", desc: "Board Prep & Projects", color: "bg-purple-50 text-purple-600" },
    { class: "Class 11", desc: "Advanced Research", color: "bg-orange-50 text-orange-600" },
    { class: "Class 12", desc: "Professional Portfolio", color: "bg-green-50 text-green-600" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Byju's Inspired */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-[#f8f5ff] to-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100 text-sm font-bold text-primary">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              Join 10k+ Students for CBSE 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-black outfit leading-[1.1] text-[#2c004d]">
              Master your <span className="text-primary">Academic Projects</span> with India's best AI.
            </h1>
            <p className="text-xl text-foreground/60 font-medium max-w-xl">
              From concept to submission—get agentic guidance, material checklists, and expert reviews all in one place.
            </p>
            
            {/* Grade Selector Block */}
            <div className="bg-white p-2 rounded-[2.5rem] shadow-lg border border-purple-50 flex flex-col sm:flex-row gap-2 max-w-2xl">
               <div className="flex-1 flex gap-2 overflow-x-auto no-scrollbar p-1">
                  {grades.map(g => (
                    <button key={g.class} className={`flex-shrink-0 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 ${g.color}`}>
                      {g.class}
                    </button>
                  ))}
               </div>
               <a href="/auth" className="btn-primary flex items-center justify-center whitespace-nowrap">
                 Book Free Project Lab
               </a>
            </div>
          </div>

          <div className="flex-1 relative hidden lg:block">
             <div className="relative z-10 animate-bounce-subtle">
                <div className="w-[500px] h-[500px] bg-primary/5 rounded-[4rem] rotate-6 absolute inset-0"></div>
                <div className="w-[500px] h-[500px] bg-white rounded-[4rem] -rotate-3 shadow-2xl flex flex-col items-center justify-center p-12 border border-purple-50">
                   <div className="text-9xl mb-8">🤖</div>
                   <div className="space-y-4 w-full">
                      <div className="h-4 w-3/4 bg-muted rounded-full"></div>
                      <div className="h-4 w-full bg-muted rounded-full"></div>
                      <div className="h-4 w-1/2 bg-muted rounded-full opacity-50"></div>
                   </div>
                   <div className="mt-12 flex gap-4 w-full">
                      <div className="h-20 flex-1 bg-grade-primary rounded-3xl"></div>
                      <div className="h-20 flex-1 bg-grade-secondary rounded-3xl"></div>
                   </div>
                </div>
             </div>
             {/* Decorative Blobs */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/40 blur-3xl rounded-full"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200/40 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-purple-50 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">500+</div>
              <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Project Templates</div>
           </div>
           <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">150+</div>
              <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Expert Mentors</div>
           </div>
           <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">10k+</div>
              <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Happy Students</div>
           </div>
           <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">4.8/5</div>
              <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Average Grade</div>
           </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
               <h2 className="section-title">Designed for every learner</h2>
               <p className="text-lg font-medium text-foreground/50">
                  Comprehensive programs that go beyond the textbook. We help you build conceptual clarity through hands-on work.
               </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               <div className="byju-card group">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">🔬</div>
                  <h3 className="text-2xl font-black mb-4">Science Lab</h3>
                  <p className="text-foreground/60 font-medium mb-8">Experiment-based learning for Physics, Chemistry, and Biology projects.</p>
                  <a href="/dashboard" className="text-primary font-black flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Projects ➔
                  </a>
               </div>
               <div className="byju-card group">
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 text-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">🎨</div>
                  <h3 className="text-2xl font-black mb-4">Creative Hub</h3>
                  <p className="text-foreground/60 font-medium mb-8">CBSE Mandatory Art-Integration projects for all classes and paired states.</p>
                  <a href="/dashboard" className="text-primary font-black flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Projects ➔
                  </a>
               </div>
               <div className="byju-card group">
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 text-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">🌍</div>
                  <h3 className="text-2xl font-black mb-4">Social Impact</h3>
                  <p className="text-foreground/60 font-medium mb-8">Work on meaningful environmental and social awareness initiatives.</p>
                  <a href="/dashboard" className="text-primary font-black flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Projects ➔
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#2c004d] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
           <div className="space-y-6">
              <h3 className="text-3xl font-black outfit">Krushiv Edu.</h3>
              <p className="opacity-60 text-sm font-medium">India's most loved AI academic platform for CBSE students.</p>
           </div>
           <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs opacity-40">Programs</h4>
              <ul className="space-y-4 text-sm font-bold opacity-80">
                 <li><a href="#">Classes 4-10</a></li>
                 <li><a href="#">Classes 11-12</a></li>
                 <li><a href="#">Competitive Exams</a></li>
                 <li><a href="#">Art Integration</a></li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs opacity-40">Resources</h4>
              <ul className="space-y-4 text-sm font-bold opacity-80">
                 <li><a href="#">NCERT Solutions</a></li>
                 <li><a href="#">Project Samples</a></li>
                 <li><a href="#">Mentor Guide</a></li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs opacity-40">Follow Us</h4>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/10"></div>
                 <div className="w-10 h-10 rounded-full bg-white/10"></div>
                 <div className="w-10 h-10 rounded-full bg-white/10"></div>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
