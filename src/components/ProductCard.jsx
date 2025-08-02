import { useCart } from '../utils/useCart';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-primary-dark font-bold">${product.price}</p>
        <div className="mt-2 flex justify-between">
          <button onClick={() => addToCart(product)}>
            <FiShoppingCart />
          </button>
          <button onClick={() => toggleWishlist(product.id)}>
            <FiHeart />
          </button>
        </div>
      </div>
    </motion.div>
  );
}