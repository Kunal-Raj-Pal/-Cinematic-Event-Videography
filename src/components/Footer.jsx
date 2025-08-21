import { Instagram,Youtube } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-white/10 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="font-serif font-black text-2xl mb-4">
                Anurag Video Mixing Zone
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Crafting cinematic stories that capture the essence of your most
                precious moments. Every frame tells a story, every story becomes
                a legacy.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/anurag_video_mixing_zone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="bg-gray-700 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@cinematicvideoclips7445?si=vckNkmznkYM10jc5"
                  className="bg-gray-700 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <p className="hover:text-red-400 transition-colors">
                    Wedding Videography
                  </p>
                </li>
                <li>
                  <p className="hover:text-red-400 transition-colors">
                    Corporate Events
                  </p>
                </li>
                <li>
                  <p className="hover:text-red-400 transition-colors">
                    Commercial Videos
                  </p>
                </li>
                <li>
                  <p className="hover:text-red-400 transition-colors">
                    Documentary Films
                  </p>
                </li>
                <li>
                  <p className="hover:text-red-400 transition-colors">
                    Highlight Reels
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    to="/Portfolio"
                    className="hover:text-red-400 transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    className="hover:text-red-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="hover:text-red-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center p-2">
          <p className="text-gray-400 text-sm items-center justify-center md:gap-2">
            © 2025 - <span className="font-bold">Anurag Video Mixing Zone</span>
            . <br />
            Designed & Developed with ❤️ by{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kunal-raj-pal"
              className="text-red-300 hover:text-red-400 trasition-all duration-300"
            >
              Kunal Raj Pal
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
