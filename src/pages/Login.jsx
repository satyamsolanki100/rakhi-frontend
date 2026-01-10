import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login logic will be connected later");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 bg-white/5 border border-white/10 p-6 rounded-xl w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Login to RAKHI
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 bg-black border border-white/10 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 bg-black border border-white/10 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-purple-600 py-2 rounded hover:bg-purple-700">
            Login
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          We store only login credentials. Uploaded files are never saved.
        </p>
      </div>
    </div>
  );
}
