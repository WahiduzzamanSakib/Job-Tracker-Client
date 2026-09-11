
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { FiBriefcase, FiPlus } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950/95 backdrop-blur-md text-white shadow-lg shadow-black/20">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30 transition-transform group-hover:scale-105">
            <FiBriefcase size={19} />
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            Job<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Tracker</span>
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-white/5 hover:text-cyan-300"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="rounded-lg bg-blue-500/15 text-cyan-300 border border-blue-400/30 font-medium hover:bg-blue-500/25 transition-all px-2 py-1 flex items-center gap-1"
          >
             Dashboard
          </Link>

          <Link
            to="/jobs/add"
            className="rounded-lg bg-blue-500/15 text-cyan-300 border border-blue-400/30 font-medium hover:bg-blue-500/25 transition-all px-2 py-1 flex items-center gap-1"
          >
            <FiPlus size={16} /> Add Job
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button
            as={Link}
            to="/login"
            variant="light"
            size="sm"
            className="text-slate-300 hover:text-white hover:bg-white/5 font-medium"
          >
            Login
          </Button>

          <Button
            as={Link}
            to="/register"
            size="sm"
            className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold text-white shadow-md shadow-blue-500/20 hover:shadow-cyan-500/30 hover:scale-105 transition-all"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

