import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full pt-20">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

          <p className="text-gray-300 mb-4">
            RAKHI is an awareness and guidance platform intended to help users
            understand potential risks related to non-consensual image or video
            misuse. The platform does not directly remove content from any
            website, application, or third-party service.
          </p>

          <p className="text-gray-300 mb-4">
            Users are solely responsible for the content they upload to RAKHI.
            By using the platform, users confirm that they own the content or
            have lawful permission to upload and analyze it.
          </p>

          <p className="text-gray-300 mb-4">
            RAKHI does not guarantee the detection of actual online leaks, nor
            does it guarantee content removal from external platforms. Any
            guidance provided is informational in nature and should not be
            considered legal advice.
          </p>

          <p className="text-gray-300 mb-4">
            The platform shall not be held responsible for actions taken by
            users, third-party websites, or external services based on the
            information or guidance provided by RAKHI.
          </p>

          <p className="text-gray-300">
            Continued use of the RAKHI platform constitutes acceptance of these
            terms and conditions. Users are advised to discontinue use if they
            do not agree with any part of these terms.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
