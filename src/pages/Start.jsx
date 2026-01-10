import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (localStorage.getItem("rakhi_verified") === "true") {
      navigate("/dashboard");
    }
  }, []);

  const handleContinue = (e) => {
    e.preventDefault();

    localStorage.setItem("rakhi_user", JSON.stringify({ name, email }));

    // reset any old OTP state
    localStorage.removeItem("rakhi_otp");
    localStorage.removeItem("rakhi_otp_expiry");

    navigate("/verify");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-white/5 border border-white/10 p-6 rounded-xl w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Welcome to RAKHI
        </h2>

        <form onSubmit={handleContinue} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 bg-black border border-white/10 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 bg-black border border-white/10 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="w-full bg-purple-600 py-2 rounded">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
