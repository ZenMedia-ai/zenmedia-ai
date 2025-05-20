import { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function AIChatStarter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-full shadow-xl text-white text-2xl hover:scale-105 transition"
        aria-label="Open AI Chat"
      >
        <FaRobot />
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 bg-white text-black w-80 p-6 rounded-2xl shadow-2xl z-50 flex flex-col gap-3">
          <span className="font-bold text-lg mb-2">AI Chat (Coming Soon)</span>
          <p className="text-gray-600">Chat with our AI for personalized tips and resources! (Beta)</p>
          <button
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg py-2 mt-3"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
