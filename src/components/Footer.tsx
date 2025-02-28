
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vpn-dark text-white py-16">
      <div className="vpn-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-vpn-green" />
              <span className="font-bold text-xl">2discus.cc</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Protecting your digital freedom and ensuring secure internet access worldwide.
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-400">© {currentYear} 2discus.cc. All rights reserved.</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-vpn-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-vpn-green transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-vpn-green transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-vpn-green transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-vpn-green transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-vpn-green transition-colors">
                  Windows
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-vpn-green transition-colors">
                  macOS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-vpn-green transition-colors">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-vpn-green transition-colors">
                  iOS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-vpn-green transition-colors">
                  Linux
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Server Status</h3>
            <div className="p-4 border border-gray-800 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400">Overall Status</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Operational</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Servers Online</span>
                <span className="text-vpn-green font-medium">95%</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <a 
                  href="https://top.2discus.cc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-vpn-green hover:underline text-sm"
                >
                  View Detailed Status
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400 text-center">
          <p>Server availability may vary by region.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
