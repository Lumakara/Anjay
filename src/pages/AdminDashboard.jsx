// src/pages/AdminDashboard.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
  FiBarChart2
} from 'react-icons/fi';
import { useAdmin } from '../utils/useAdmin';

export default function AdminDashboard() {
  const { stats, recentUsers, recentOrders } = useAdmin();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto space-y-8">
      <motion.h1
        className="text-3xl font-display"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Admin Dashboard
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <StatCard icon={<FiUsers />} label="Total Users" value={stats.users} />
        <StatCard icon={<FiShoppingCart />} label="Total Orders" value={stats.orders} />
        <StatCard
          icon={<FiDollarSign />}
          label="Revenue"
          value={`$${stats.revenue}`}
        />
        <StatCard
          icon={<FiBarChart2 />}
          label="Active Sessions"
          value={stats.sessions}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2 className="text-xl font-display mb-4">Recent Users</h2>
          <ul className="space-y-2">
            {recentUsers.map((u) => (
              <li key={u.id} className="flex justify-between">
                <span>{u.name}</span>
                <span className="text-sm text-gray-500">{u.joined}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xl font-display mb-4">Recent Orders</h2>
          <ul className="space-y-2">
            {recentOrders.map((o) => (
              <li key={o.id} className="flex justify-between">
                <span>#{o.id}</span>
                <span>${o.total.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
);

function StatCard({ icon, label, value }) {
  return (
    <motion.div
      className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
    >
      <div className="text-primary text-3xl mr-4">{icon}</div>
      <div>
        <p className="text-sm">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </motion.div>
  );
}