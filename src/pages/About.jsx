import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full">
        <div className="mx-auto w-full max-w-3xl px-6 py-20">
          <h1 className="text-3xl font-bold mb-6">About RAKHI</h1>

          <p className="text-gray-300 mb-6">
            <strong>RAKHI</strong> is a privacy-first awareness and support
            platform focused on helping individuals understand the potential
            risk of non-consensual image or video misuse. The platform does not
            publish, share, or promote sensitive content. Instead, it provides
            analytical insights and guided awareness to help users make informed
            decisions regarding their digital privacy.
          </p>

          <h2 className="text-xl font-semibold mb-3">Project Focus</h2>
          <p className="text-gray-300 mb-6">
            RAKHI currently focuses on risk awareness rather than active content
            tracking or surveillance. Users may upload content voluntarily to
            receive a leak risk score, prevention guidance, an action timeline,
            and a downloadable proof pack for reporting purposes. All uploaded
            data is processed temporarily and is not intended to be stored,
            indexed, or shared.
          </p>

          <h2 className="text-xl font-semibold mb-3">Vision</h2>
          <p className="text-gray-300 mb-6">
            The vision of RAKHI is to shift the conversation from exposure to
            empowerment. The platform aims to support users by promoting digital
            safety awareness, ethical technology use, and responsible handling
            of sensitive content without replacing legal authorities or
            platform-level moderation systems.
          </p>

          <h2 className="text-xl font-semibold mb-3">Why the name “RAKHI”?</h2>
          <p className="text-gray-300 mb-6">
            The name <strong>RAKHI</strong> symbolizes protection, trust, and
            responsibility. Just as a rakhi represents a promise of care and
            safety, the RAKHI platform is designed to act as a digital shield
            that helps users protect their privacy and regain confidence in the
            online environment.
          </p>

          <h2 className="text-xl font-semibold mb-3">About the Creator</h2>
          <p className="text-gray-300 mb-6">
            RAKHI is conceptualized and developed by{" "}
            <strong>Satyam Kumar Solanki</strong>
            as an independent technical project. The idea originated from
            observing the increasing misuse of personal digital content and the
            lack of accessible, privacy-respecting awareness tools for affected
            individuals. The creator has personally handled the concept design,
            system architecture, and implementation with a strong emphasis on
            ethical boundaries and real-world applicability.
          </p>

          <h2 className="text-xl font-semibold mb-3">Important Notice</h2>
          <p className="text-gray-300">
            RAKHI is an awareness and support platform only. It does not claim
            to identify actual online leaks, monitor third-party platforms, or
            guarantee content removal. The platform does not replace legal,
            law-enforcement, or official reporting mechanisms. Users are advised
            to approach appropriate authorities or platform providers for
            verified takedown actions.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
