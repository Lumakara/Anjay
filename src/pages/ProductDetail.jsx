// src/pages/ProductDetail.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../utils/useCart';
import { productsData } from '../utils/helpers';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === +id);
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [activeImg, setActiveImg] = useState(product.images[0] || product.image);

  return (
    <main className="pt-24 pb-16 max-w-4xl mx-auto space-y-8">
      <motion.div
        className="flex flex-col lg:flex-row gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Image Gallery */}
        <div className="flex-1 space-y-4">
          <motion.img
            src={activeImg}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
          />
          <div className="flex space-x-2 overflow-auto">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  img === activeImg ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setActiveImg(img)}
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-display">{product.name}</h1>
          <p className="text-xl text-primary font-bold">${product.price}</p>
          <p className="text-gray-700 dark:text-gray-300">{product.description}</p>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => addToCart(product)}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-2 bg-primary text-white rounded-lg"
            >
              <FiShoppingCart /> <span>Add to Cart</span>
            </motion.button>
            <motion.button
              onClick={() => toggleWishlist(product.id)}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full ${
                wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-500'
              } bg-gray-100 dark:bg-gray-700`}
            >
              <FiHeart />
            </motion.button>
          </div>

          {/* Reviews */}
          <div className="space-y-2">
            <h2 className="font-semibold">Customer Reviews</h2>
            {product.reviews.map((r, i) => (
              <motion.div
                key={i}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{r.user}</span>
                  <span>{'⭐'.repeat(r.rating)}</span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{r.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
);
}