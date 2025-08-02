import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productsData } from '../utils/helpers';
import { useTranslation } from 'react-i18next';

export default function Search() {
  const { t } = useTranslation();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get('q') || '';
  
  const [query, setQuery] = useState(q);
  const [results, setResults] = useState(productsData);
  const [filters, setFilters] = useState({ price: [0, 500], rating: 0 });

  useEffect(() => {
    let filtered = productsData
      .filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
      .filter(p => p.price >= filters.price[0] && p.price <= filters.price[1])
      .filter(p => p.rating >= filters.rating);
    setResults(filtered);
  }, [query, filters]);

  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto">
      <motion.h2
        className="text-2xl font-display"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {t('search_placeholder')}
      </motion.h2>

      <div className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        {/* Search Input */}
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 rounded-full bg-gray-100"
          placeholder={t('search_placeholder')}
        />

        {/* Filters */}
        <div className="flex space-x-4">
          <select
            className="px-3 py-2 bg-gray-100 rounded"
            onChange={e =>
              setFilters(f => ({ ...f, rating: Number(e.target.value) }))
            }
          >
            <option value={0}>All ratings</option>
            <option value={4}>4 stars & up</