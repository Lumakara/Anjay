import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { FiShoppingCart, FiUser, FiLogOut, FiMenu, FiLogIn } from 'react-icons/fi';

export default function Header() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-sm dark:bg-gray-900/70">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/home" className="text-2xl font-display text-primary">
          Lumakara
        </Link>
        <div className="flex-1 px-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none"
            onKeyDown={(e) => e.key === 'Enter' && nav(`/search?q=${e.target.value}`)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart"><FiShoppingCart size={20} /></Link>
          {user ? (
            <>
              <Link to="/profile"><FiUser size={20} /></Link>
              <button onClick={logout}><FiLogOut size={20} /></button>
            </>
          ) : (
            <Link to="/login"><FiLogIn size={20} /></Link>
          )}
          <ThemeToggle />
          <LanguageSelector />
          <button><FiMenu size={24} /></button>
        </div>
      </div>
    </header>
  );
}