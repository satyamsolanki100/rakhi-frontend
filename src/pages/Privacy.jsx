import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full pt-20">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="text-gray-300 mb-4">
            RAKHI is built with a strict privacy-first approach. The platform is
            designed to minimize data exposure and prevent unnecessary storage
            of sensitive information.
          </p>

          <p className="text-gray-300 mb-4">
            Any images or videos uploaded by users are processed temporarily for
            analysis purposes only. Uploaded content is not intended to be
            permanently stored, indexed, or made accessible to other users.
          </p>

          <p className="text-gray-300 mb-4">
            RAKHI does not publish, share, sell, or distribute user-uploaded
            content to third parties. All processing is performed solely to
            provide awareness, risk estimation, and guidance to the user.
          </p>

          <p className="text-gray-300 mb-4">
            User-provided details such as name and email address are used only
            for session verification and basic communication during usage. This
            information is not reused for marketing purposes and is not shared
            with external entities.
          </p>

          <p className="text-gray-300 mb-4">
            RAKHI does not perform active monitoring, surveillance, or scanning
            of external platforms, websites, or social media services. The
            platform does not claim to track or discover real-world content
            leaks.
          </p>

          <p className="text-gray-300">
            By using RAKHI, users acknowledge that the platform is intended for
            privacy awareness and guidance only and does not replace legal,
            law-enforcement, or official reporting mechanisms.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
