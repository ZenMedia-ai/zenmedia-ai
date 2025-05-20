import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jessica A.",
    quote: "ZenMedia.ai gave me the roadmap I needed to launch my side hustle. The tips are pure gold!",
  },
  {
    name: "Brandon T.",
    quote: "The email PDF was better than most paid courses. Super actionable, parent-focused, and inspiring!",
  },
  {
    name: "Kara S.",
    quote: "Finally a site that delivers on making online income possible for busy parents. Highly recommend.",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-800">
        Real Success Stories
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
          >
            <p className="text-lg text-gray-700">"{t.quote}"</p>
            <span className="font-bold text-indigo-700 mt-2">– {t.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
