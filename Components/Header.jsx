import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-4 md:px-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="ZenMedia.ai Logo"
          width={54}
          height={54}
          className="rounded-xl"
        />
        <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
          ZenMedia<span className="text-pink-200">.ai</span>
        </span>
      </div>
      <nav className="hidden md:flex gap-6">
        <a href="#features" className="text-white font-semibold hover:text-pink-200 transition">Features</a>
        <a href="#about" className="text-white font-semibold hover:text-pink-200 transition">About</a>
        <a href="#contact" className="text-white font-semibold hover:text-pink-200 transition">Contact</a>
      </nav>
    </header>
  );
}
