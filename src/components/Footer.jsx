
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} <span className="font-semibold text-white">JobTracker</span>. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-1.5 text-sm text-slate-400">
            <span>Built with</span>
            <FiHeart
              size={15}
              className="mx-0.5 text-rose-500 animate-pulse"
              fill="currentColor"
            />
            <span>by</span>
            <a
              href="https://www.linkedin.com/in/waheduzzaman-md"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors hover:underline"
            >
              Md. Waheduzzaman
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

