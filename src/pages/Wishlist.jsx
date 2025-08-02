// src/pages/Wishlist.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../utils/useCart';
import ProductCard from '../components/ProductCard';
import { productsData } from '../utils/helpers';

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useCart();
  const items = wishlist.map((id) => productsData.find((p) => p.id === id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto">
      <motion.h1
        className="text-3xl font-display mb-8"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        Your Wishlist
      </motion.h1>

      {items.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {items.map((p) => (
            <motion.div
              key={p.id}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <ProductCard product={p} />
              <button
                className="absolute top-2 right-2 text-red-500"
                onClick={() => toggleWishlist(p.id)}
                aria-label="Remove from wishlist"
              >
                ❤️
              </button>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-gray-500 mt-12">
          Your wishlist is empty. Start adding some favorites!
        </p>
      )}
    </main>
);
}