import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { SiMeta } from "react-icons/si";

export default function SocialBar() {
  return (
    <div className="flex gap-4 items-center justify-center mt-8">
      <a href="https://www.instagram.com/zenmedia.ai" target="_blank" rel="noopener" aria-label="Instagram">
        <FaInstagram className="w-6 h-6 hover:text-pink-500" />
      </a>
      <a href="https://www.meta.com/zenmedia.ai" target="_blank" rel="noopener" aria-label="Meta">
        <SiMeta className="w-6 h-6 hover:text-blue-500" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61574933558532" target="_blank" rel="noopener" aria-label="Facebook">
        <FaFacebook className="w-6 h-6 hover:text-blue-700" />
      </a>
      <a href="https://www.tiktok.com/@zenmedia.ai" target="_blank" rel="noopener" aria-label="TikTok">
        <FaTiktok className="w-6 h-6 hover:text-black" />
      </a>
    </div>
  );
}
