import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");

  useEffect(() => {
    document.title = "RAKHI – Privacy Risk Assessment";

    if (localStorage.getItem("rakhi_verified") === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleContinue = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "rakhi_user",
      JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        purpose,
      }),
    );

    localStorage.removeItem("rakhi_otp");
    localStorage.removeItem("rakhi_otp_expiry");

    navigate("/verify");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-white/5 border border-white/10 p-6 rounded-xl w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-2 text-center">
          RAKHI – Privacy Risk Assessment
        </h2>

        <p className="text-sm text-gray-400 text-center mb-6">
          A privacy-first platform to help you understand the potential misuse
          risk of sensitive images or videos and guide you on prevention and
          response.
        </p>

        <form onSubmit={handleContinue} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-3 py-2 bg-black border border-white/10 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-3 py-2 bg-black border border-white/10 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <select
            className="w-full px-3 py-2 bg-black border border-white/10 rounded text-gray-300"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required
          >
            <option value="">Why are you using RAKHI?</option>
            <option value="self-check">Checking my own private content</option>
            <option value="prevention">Preventing future misuse</option>
            <option value="awareness">General privacy awareness</option>
          </select>

          <button className="w-full bg-purple-600 py-2 rounded hover:bg-purple-700">
            Continue Securely
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          No uploaded content is stored or shared. RAKHI does not search the
          internet or social media platforms.
        </p>
      </div>
    </div>
  );
}
