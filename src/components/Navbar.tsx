
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="vpn-container">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-vpn-blue font-bold text-xl"
          >
            <Shield className="h-6 w-6 text-vpn-green" />
            <span>2discus.cc</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-vpn-blue hover:text-vpn-green transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-vpn-blue hover:text-vpn-green transition-colors"
            >
              About
            </Link>
            <Link
              to="/faq"
              className="text-vpn-blue hover:text-vpn-green transition-colors"
            >
              FAQ
            </Link>
            <Button asChild className="bg-vpn-blue hover:bg-vpn-blue/90 text-white">
              <a 
                href="https://top.2discus.cc" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download Now
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-vpn-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md py-4 px-6 flex flex-col gap-4 animate-fade-in">
            <Link
              to="/"
              className="text-vpn-blue hover:text-vpn-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-vpn-blue hover:text-vpn-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/faq"
              className="text-vpn-blue hover:text-vpn-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button asChild className="bg-vpn-blue hover:bg-vpn-blue/90 text-white w-full">
              <a 
                href="https://top.2discus.cc" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
