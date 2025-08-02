// src/pages/Profile.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../utils/useAuth';
import { useOrders } from '../utils/useOrders';
import { FiEdit } from 'react-icons/fi';

export default function Profile() {
  const { user, logout } = useAuth();
  const { orders } = useOrders();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: user.name, email: user.email });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSave = () => {
    // mock update
    setEditing(false);
  };

  return (
    <main className="pt-24 pb-16 max-w-3xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4"
      >
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-display">My Profile</h1>
          <button onClick={() => setEditing((e) => !e)}>
            <FiEdit />
          </button>
        </header>

        {editing ? (
          <div className="space-y-4">
            <input
              className="w-full px-4 py-2 bg-gray-100 rounded"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
            <input
              className="w-full px-4 py-2 bg-gray-100 rounded"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-primary text-white rounded-lg"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
      >
        <h2 className="text-xl font-display mb-4">Recent Orders</h2>
        {orders.slice(-5).map((o) => (
          <div key={o.id} className="flex justify-between py-2 border-b">
            <span>Order #{o.id}</span>
            <span>${o.total.toFixed(2)}</span>
          </div>
        ))}
        {orders.length === 0 && (
          <p className="text-gray-500">No orders yet.</p>
        )}
      </motion.div>

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Logout
      </button>
    </main>
);
}