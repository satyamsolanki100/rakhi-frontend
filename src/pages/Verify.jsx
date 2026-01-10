import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Verify() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("rakhi_user"));

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  const sendOtp = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem("rakhi_otp", code);

    emailjs.send(
      "service_lsa5cag",
      "template_2a6mt9p",
      {
        to_email: user.email,
        to_name: user.name,
        otp: code,
      },
      "9uR4u735QODLLIAas"
    );

    setTimer(60); // reset timer on resend
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    sendOtp();
  }, []);

  // OTP TIMER
  useEffect(() => {
    if (timer === 0) return;
    const t = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(t);
  }, [timer]);

  const verifyOtp = () => {
    if (otp === localStorage.getItem("rakhi_otp")) {
      localStorage.setItem("rakhi_verified", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full max-w-sm bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          OTP Verification
        </h2>

        <input
          placeholder="Enter OTP"
          className="w-full mb-4 px-3 py-2 bg-black border border-white/10 rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          onClick={verifyOtp}
          className="w-full bg-purple-600 py-2 rounded hover:bg-purple-700"
        >
          Verify
        </button>

        <p className="text-xs text-gray-400 mt-4 text-center">
          OTP expires in {timer}s
        </p>

        {/* ✅ RESEND OTP BUTTON */}
        {timer === 0 && (
          <button
            onClick={sendOtp}
            className="mt-4 w-full text-sm text-purple-400 hover:text-purple-300"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
}
