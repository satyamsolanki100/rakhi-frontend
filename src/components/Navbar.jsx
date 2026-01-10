import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("rakhi_user");
    localStorage.removeItem("rakhi_verified");
    localStorage.removeItem("rakhi_otp");
    localStorage.removeItem("rakhi_otp_expiry");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-8 py-4 flex items-center justify-between bg-black/80 backdrop-blur border-b border-white/10">
      {/* Logo */}
      <h1
        className="text-2xl font-bold tracking-wide cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        RAKHI
      </h1>

      {/* Links */}
      <div className="flex gap-6 items-center text-sm text-gray-300">
        <button onClick={() => navigate("/about")} className="hover:text-white">
          About
        </button>
        <button
          onClick={() => navigate("/privacy")}
          className="hover:text-white"
        >
          Privacy
        </button>
        <button onClick={() => navigate("/terms")} className="hover:text-white">
          Terms
        </button>
        <button
          onClick={handleLogout}
          className="px-3 py-1 rounded bg-purple-600/20 hover:bg-purple-600/40 text-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
