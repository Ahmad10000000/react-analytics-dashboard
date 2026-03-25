import { useState } from "react";
import { LockKeyhole, Mail } from "lucide-react";

type LoginProps = {
  onLogin: () => void;
};

function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }

    setError("");
    onLogin();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Admin Login</h1>
          <p className="text-slate-400 text-sm mt-2">
            Sign in to access the analytics dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-slate-300 mb-2">Email</label>
            <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
              <Mail size={18} className="text-slate-400" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-white text-sm placeholder:text-slate-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">Password</label>
            <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
              <LockKeyhole size={18} className="text-slate-400" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-white text-sm placeholder:text-slate-500"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 rounded-xl bg-slate-950 border border-slate-800 p-4 text-sm text-slate-400">
          Demo credentials are already filled in.
        </div>
      </div>
    </div>
  );
}

export default Login;