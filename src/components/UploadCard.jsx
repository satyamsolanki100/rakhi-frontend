import { useState } from "react";
import { uploadFile } from "../api";

export default function UploadCard() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const data = await uploadFile(file);
    setResult(data);
    setLoading(false);
  };

  // ✅ PROOF PACK GENERATOR
  const downloadProofPack = () => {
    if (!result || !result.risk) return;

    const content = `
RAKHI – Proof Pack

Nudity Detected: ${result.nudity_detected ? "YES" : "NO"}

Leak Risk Score: ${result.risk.score}%
Risk Level: ${result.risk.level}

Reasons:
${result.risk.reasons.map((r, i) => `${i + 1}. ${r}`).join("\n")}

Action Timeline:
${
  result.risk.level === "HIGH"
    ? `- Preserve evidence immediately
- Report on suspected platforms within 24 hrs
- Request search engine removal within 48 hrs
- File cybercrime complaint within 72 hrs`
    : result.risk.level === "MEDIUM"
    ? `- Monitor sharing within 24 hrs
- Prepare reporting evidence within 48 hrs
- Report if misuse confirmed`
    : `- Periodic monitoring
- Maintain privacy hygiene`
}

Generated on: ${new Date().toLocaleString()}

Disclaimer:
This report is generated for awareness and evidence support only.
RAKHI does not host or store any uploaded content.
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "rakhi-proof-pack.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* UPLOAD CARD */}
      <div className="w-full bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
        <h3 className="text-lg font-semibold mb-4">Private Upload</h3>

        <input
          type="file"
          className="block w-full text-sm text-gray-300 mb-6"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 transition py-2 rounded-md"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {loading && (
          <div className="mt-4 h-2 w-full bg-white/10 rounded">
            <div className="h-2 bg-purple-500 rounded animate-pulse w-3/4"></div>
          </div>
        )}
      </div>

      {/* RESULT MODAL */}
      {result && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-[#12091f] border border-white/10 rounded-xl p-8 w-full max-w-md overflow-y-auto max-h-[90vh]">
            <h3 className="text-lg font-semibold mb-4">Analysis Result</h3>

            {/* NUDITY RESULT */}
            <p className="mb-3">
              Nudity Detected:{" "}
              <span
                className={
                  result.nudity_detected
                    ? "text-red-400 font-semibold"
                    : "text-green-400 font-semibold"
                }
              >
                {result.nudity_detected ? "YES" : "NO"}
              </span>
            </p>

            {/* LEAK RISK SCORE */}
            {result.risk && (
              <div className="mb-4 p-4 bg-white/5 border border-white/10 rounded">
                <p className="font-semibold">
                  Leak Risk Score: {result.risk.score}%
                </p>
                <p className="text-sm text-gray-300 mb-2">
                  Risk Level: {result.risk.level}
                </p>

                <ul className="text-sm text-gray-400 list-disc list-inside">
                  {result.risk.reasons.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* FUTURE LEAK PREVENTION */}
            {result.risk && (
              <div className="mb-4 p-4 bg-white/5 border border-white/10 rounded">
                <p className="font-semibold mb-2">Future Leak Prevention</p>

                {result.risk.level === "HIGH" && (
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    <li>Avoid sharing this image on social media</li>
                    <li>Remove metadata before saving or sending</li>
                    <li>Crop or blur identifiable areas</li>
                    <li>Add a visible watermark</li>
                  </ul>
                )}

                {result.risk.level === "MEDIUM" && (
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    <li>Limit sharing to trusted contacts</li>
                    <li>Disable auto-backups on apps</li>
                    <li>Reduce image resolution</li>
                  </ul>
                )}

                {result.risk.level === "LOW" && (
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    <li>Risk is low, but remain cautious</li>
                    <li>Review privacy settings periodically</li>
                  </ul>
                )}
              </div>
            )}

            {/* ACTION TIMELINE */}
            {result.risk && (
              <div className="mb-4 p-4 bg-white/5 border border-white/10 rounded">
                <p className="font-semibold mb-2">Action Timeline</p>

                {result.risk.level === "HIGH" && (
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    <li>0–1 hr: Preserve screenshots and evidence</li>
                    <li>24 hrs: Report on suspected platforms</li>
                    <li>48 hrs: Request search engine removal</li>
                    <li>72 hrs: File cybercrime complaint</li>
                  </ul>
                )}

                {result.risk.level === "MEDIUM" && (
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    <li>24 hrs: Monitor sharing</li>
                    <li>48 hrs: Prepare reporting evidence</li>
                    <li>72 hrs: Report if misuse is confirmed</li>
                  </ul>
                )}

                {result.risk.level === "LOW" && (
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    <li>Monitor periodically</li>
                    <li>Maintain privacy hygiene</li>
                  </ul>
                )}
              </div>
            )}

            {/* PROOF PACK BUTTON */}
            <button
              onClick={downloadProofPack}
              className="w-full mb-3 bg-white/10 hover:bg-white/20 py-2 rounded"
            >
              Download Proof Pack
            </button>

            <button
              onClick={() => setResult(null)}
              className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
