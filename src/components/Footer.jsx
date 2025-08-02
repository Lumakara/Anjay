import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/help">FAQ</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/help#contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Settings</h4>
          <ul className="space-y-1 text-sm">
            <li><ThemeToggle /></li>
            <li><LanguageSelector /></li>
          </ul>
        </div>
        <div className="col-span-2 flex items-center justify-end space-x-4">
          <FaFacebook size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
      <div className="text-center text-xs py-2">
        © {new Date().getFullYear()} Lumakara Store
      </div>
    </footer>
  );
}