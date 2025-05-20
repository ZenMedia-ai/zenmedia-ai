export default function Footer() {
  return (
    <footer className="mt-20 py-8 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-t-3xl shadow-lg flex flex-col items-center gap-2">
      <div className="flex gap-5 mb-2">
        <a href="https://www.instagram.com/zenmedia.ai" target="_blank" rel="noopener" className="hover:underline">Instagram</a>
        <a href="https://www.tiktok.com/@zenmedia.ai" target="_blank" rel="noopener" className="hover:underline">TikTok</a>
        <a href="https://www.facebook.com/profile.php?id=61574933558532" target="_blank" rel="noopener" className="hover:underline">Facebook</a>
      </div>
      <span className="text-sm">
        © {new Date().getFullYear()} ZenMedia.ai. All rights reserved.
      </span>
      <span className="text-xs text-pink-200 mt-1">
        Some links are affiliate links. As an Amazon Associate and affiliate partner, we may earn commissions.
      </span>
    </footer>
  );
}
