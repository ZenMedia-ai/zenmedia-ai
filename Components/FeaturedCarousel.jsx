import { useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Featured TikTok",
    url: "https://www.tiktok.com/@zenmedia.ai/video/7343869292024165638",
    type: "tiktok",
  },
  {
    title: "Featured YouTube",
    url: "https://www.youtube.com/embed/L8Pz1ABdTP0",
    type: "youtube",
  },
  {
    title: "Featured Guide",
    url: "/Top10_Parent_Money_Hacks_ZenMedia.pdf",
    type: "pdf",
  },
];

export default function FeaturedCarousel() {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-4xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">
        Featured Content
      </h2>
      <div className="flex flex-col items-center gap-6">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center"
        >
          {slides[active].type === "tiktok" && (
            <iframe
              src="https://www.tiktok.com/embed/7343869292024165638"
              height={540}
              width={300}
              title="Featured TikTok"
              allowFullScreen
              className="rounded-xl border-2"
            />
          )}
          {slides[active].type === "youtube" && (
            <iframe
              width="420"
              height="236"
              src={slides[active].url}
              title="Featured YouTube"
              allowFullScreen
              className="rounded-xl border-2"
            />
          )}
          {slides[active].type === "pdf" && (
            <a
              href={slides[active].url}
              target="_blank"
              rel="noopener"
              className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-bold px-7 py-4 rounded-xl mt-4 shadow-lg text-xl"
            >
              📄 Download the Top 10 Parent-Inspired Guide (PDF)
            </a>
          )}
        </motion.div>
        <div className="flex gap-4 mt-4">
          {slides.map((s, idx) => (
            <button
              key={idx}
              className={`rounded-full w-4 h-4 ${idx === active ? "bg-pink-500" : "bg-gray-300"} transition`}
              onClick={() => setActive(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
