
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-default-200 bg-blue-950">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col gap-4 sm:flex-row text-white sm:items-center sm:justify-between">
          <p className="text-sm  text-default-500">
            © {new Date().getFullYear()} JobTracker. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-sm text-default-500">
            Made with
            <FiHeart
              size={14}
              className="mx-1 text-danger"
              fill="currentColor"
            />
            for better job hunting.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

