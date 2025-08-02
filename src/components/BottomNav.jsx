import { NavLink } from 'react-router-dom';
import { FiHome, FiSearch, FiHeart, FiShoppingCart, FiUser, FiLogIn } from 'react-icons/fi';
import { useAuth } from '../utils/useAuth';

export default function BottomNav() {
  const { user } = useAuth();

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white dark:bg-gray-800 border-t dark:border-gray-700 md:hidden">
      <ul className="flex justify-around py-2">
        <li>
          <NavLink to="/home" className="flex flex-col items-center text-sm">
            <FiHome size={20} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className="flex flex-col items-center text-sm">
            <FiSearch size={20} />
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="flex flex-col items-center text-sm">
            <FiShoppingCart size={20} />
            Cart
          </NavLink>
        </li>
        <li>
          {user ? (
            <NavLink to="/profile" className="flex flex-col items-center text-sm">
              <FiUser size={20} />
              Profile
            </NavLink>
          ) : (
            <NavLink to="/login" className="flex flex-col items-center text-sm">
              <FiLogIn size={20} />
              Login
            </NavLink>
          )}
        </li>
        <li>
          <NavLink to="/wishlist" className="flex flex-col items-center text-sm">
            <FiHeart size={20} />
            Wishlist
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}