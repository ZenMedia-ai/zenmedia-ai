export default function EmailHero() {
  return (
    <section id="email-capture" className="py-20 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl max-w-3xl mx-auto mt-12 text-white text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
        Unlock the Best in AI, Self-Help, and Online Income
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Join 5,000+ subscribers. Get our exclusive PDF guide FREE:
        <br />
        <span className="font-semibold">"Top 10 Parent-Inspired Ways to Make Money from Home"</span>
      </p>
      <form
        action="https://zenmedia.us6.list-manage.com/subscribe/post?u=e52cf29046d53765ada9d79d1&amp;id=3bc5cb55bf&amp;f_id=00350ee2f0"
        method="POST"
        target="_blank"
        className="flex flex-col md:flex-row justify-center gap-3"
      >
        <input
          type="email"
          name="EMAIL"
          required
          placeholder="Enter your email"
          className="rounded-xl px-5 py-3 text-gray-800 font-semibold w-full md:w-80 focus:outline-none"
        />
        <input
          type="text"
          name="FNAME"
          placeholder="First Name"
          className="rounded-xl px-5 py-3 text-gray-800 font-semibold w-full md:w-48 focus:outline-none"
        />
        <input
          type="text"
          name="LNAME"
          placeholder="Last Name"
          className="rounded-xl px-5 py-3 text-gray-800 font-semibold w-full md:w-48 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-black hover:bg-white hover:text-black text-white font-bold px-7 py-3 rounded-xl shadow-lg transition-all"
        >
          Get My Free Guide
        </button>
      </form>
      <p className="text-xs text-white/80 mt-3">
        No spam, ever. Unsubscribe anytime.
      </p>
    </section>
  );
}
