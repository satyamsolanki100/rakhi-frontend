import { useState } from "react";

const guides = {
  telegram: {
    title: "Telegram",
    steps: [
      "Open the Telegram message or channel.",
      "Click ⋮ and select Report.",
      "Choose Pornography / Non-consensual content.",
      "Add note that content was shared without consent.",
      "Submit the report or email abuse@telegram.org.",
    ],
  },
  instagram: {
    title: "Instagram",
    steps: [
      "Open the post.",
      "Click ⋮ → Report.",
      "Select Nudity or sexual content.",
      "Choose Involves me → Shared without consent.",
      "Submit the report.",
    ],
  },
  adult: {
    title: "Adult Websites",
    steps: [
      "Scroll to bottom of site.",
      "Find DMCA or Report Abuse link.",
      "Submit URL and screenshots.",
      "State content was uploaded without consent.",
      "Escalate to hosting provider if ignored.",
    ],
  },
};

export default function RemovalGuide() {
  const [platform, setPlatform] = useState(null);

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-6">Removal Guidance</h3>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setPlatform("telegram")}
          className="px-4 py-2 bg-white/10 rounded"
        >
          Telegram
        </button>
        <button
          onClick={() => setPlatform("instagram")}
          className="px-4 py-2 bg-white/10 rounded"
        >
          Instagram
        </button>
        <button
          onClick={() => setPlatform("adult")}
          className="px-4 py-2 bg-white/10 rounded"
        >
          Adult Sites
        </button>
      </div>

      {platform && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h4 className="font-semibold mb-4">{guides[platform].title}</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
            {guides[platform].steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
