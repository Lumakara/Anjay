import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

export default function Index() {
  const featured = [ /* array of product data */ ];

  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto">
      <section className="mb-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-display mb-4"
        >
          Featured Products
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      {/* Add promo banners, categories, particle hero, etc. */}
    </main>
  );
}