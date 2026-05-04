"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [method, setMethod] = useState<"email" | "mobile">("email");
  const [isLogin, setIsLogin] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful registration/login
    router.push("/onboarding/avatar");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-gradient mx-auto mb-6 animate-pulse-glow flex items-center justify-center text-3xl">
            🎓
          </div>
          <h1 className="text-3xl font-bold outfit mb-2">
            {isLogin ? "Welcome Back!" : "Join Krushiv Edu"}
          </h1>
          <p className="text-white/40 text-sm">
            {isLogin ? "Continue your project journey" : "Start your path to academic excellence"}
          </p>
        </div>

        <div className="glass-card p-8 border border-white/10 rounded-[32px] shadow-2xl">
          <div className="flex p-1 bg-white/5 rounded-2xl mb-8">
            <button 
              onClick={() => setMethod("email")}
              className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${method === 'email' ? 'bg-white/10 shadow-lg' : 'opacity-40 hover:opacity-100'}`}
            >
              Email Address
            </button>
            <button 
              onClick={() => setMethod("mobile")}
              className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${method === 'mobile' ? 'bg-white/10 shadow-lg' : 'opacity-40 hover:opacity-100'}`}
            >
              Mobile Number
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block mb-2">
                {method === 'email' ? 'Email Address' : 'Phone Number'}
              </label>
              <input 
                type={method === 'email' ? 'email' : 'tel'} 
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={method === 'email' ? 'name@school.com' : '+91 98765 43210'}
                className="w-full glass p-4 rounded-2xl border border-white/10 bg-transparent text-sm outline-none focus:border-purple-500/50 transition-all"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  className="w-full glass p-4 rounded-2xl border border-white/10 bg-transparent text-sm outline-none focus:border-purple-500/50 transition-all"
                />
              </div>
            )}

            <button type="submit" className="w-full py-4 rounded-2xl bg-gradient font-bold shadow-lg shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-xs text-white/40 hover:text-purple-400 transition-colors"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
