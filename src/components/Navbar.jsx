
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { FiBriefcase, FiPlus } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="border-b border-default-200 bg-blue-900 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <FiBriefcase size={19} />
          </div>

          <span className="text-xl font-bold text-foreground text-white">
            Job<span className="text-primary">Tracker</span>
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-default-600 transition-colors hover:bg-default-100 hover:text-primary"
          >
            Home
          </Link>

          <Button
            as={Link}
            to="/jobs/add"
            color="primary"
            variant="flat"
            size="sm"
            startContent={<FiPlus size={16} />}
          >
            Add Job
          </Button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button
            as={Link}
            to="/login"
            variant="light"
            size="sm"
          >
            Login
          </Button>

          <Button
            as={Link}
            to="/register"
            color="primary"
            size="sm"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

