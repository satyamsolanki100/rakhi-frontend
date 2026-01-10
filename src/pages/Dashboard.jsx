import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";
import RemovalGuide from "../components/RemovalGuide";
import Footer from "../components/Footer";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("rakhi_verified") !== "true") {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-600/20 blur-3xl rounded-full" />

      <Navbar />

      {/* CONTENT AREA — SINGLE SOURCE OF WIDTH */}
      <main className="relative z-10 flex-1 w-full">
        <div className="mx-auto w-full max-w-7xl px-10 py-20">
          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* LEFT */}
            <div className="flex flex-col gap-10">
              <UploadCard />
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6">
              <RemovalGuide />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
