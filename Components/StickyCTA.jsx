import { FaArrowRight } from "react-icons/fa";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-4 z-50 animate-bounce hover:animate-none">
      <span className="text-white font-bold text-lg">
        Get our Free PDF: Top 10 Parent-Inspired Money Hacks!
      </span>
      <a
        href="#email-capture"
        className="bg-black text-white rounded-xl px-5 py-2 font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition"
      >
        Get It Now <FaArrowRight />
      </a>
    </div>
  );
}
