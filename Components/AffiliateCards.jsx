import { FaExternalLinkAlt } from "react-icons/fa";

export default function AffiliateCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 mt-8">
      {/* Learn Launch Lead Challenge */}
      <a
        href="https://learnlaunchleadchallenge.com/get-started/enroll?aid=71455"
        target="_blank"
        rel="noopener"
        className="rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-2xl hover:border-blue-400 transition-all bg-white"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold">🚀 Learn Launch Lead Challenge</span>
          <FaExternalLinkAlt className="w-4 h-4 text-blue-400" />
        </div>
        <p className="text-gray-600">
          Take your online business to the next level with step-by-step guidance and exclusive training. Get started today!
        </p>
        <button className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-xl mt-2 w-fit shadow hover:bg-blue-700 transition-all">
          Enroll Now
        </button>
      </a>
      {/* Legendary Confidence Challenge */}
      <a
        href="https://legendaryconfidencechallenge.com/get-started/enroll?aid=71455"
        target="_blank"
        rel="noopener"
        className="rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-2xl hover:border-indigo-400 transition-all bg-white"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold">💪 Legendary Confidence Challenge</span>
          <FaExternalLinkAlt className="w-4 h-4 text-indigo-400" />
        </div>
        <p className="text-gray-600">
          Unlock powerful confidence strategies to boost your career and personal growth. Secure your spot in the challenge now!
        </p>
        <button className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-xl mt-2 w-fit shadow hover:bg-indigo-700 transition-all">
          Join the Challenge
        </button>
      </a>
    </div>
  );
}
