// src/pages/admin/DashboardHome.jsx
import { useEffect, useState } from 'react';
import { getAllUsers, getAllProducts, getAllOrders } from '../../services/api';

export default function DashboardHome() {
  const [stats, setStats] = useState({ users: 0, products: 0, orders: 0 });

  useEffect(() => {
    Promise.all([
      getAllUsers().then((res) => res.length),
      getAllProducts().then((res) => res.length),
      getAllOrders().then((res) => res.length),
    ]).then(([users, products, orders]) => {
      setStats({ users, products, orders });
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      <StatCard label="Total Users" value={stats.users} />
      <StatCard label="Total Products" value={stats.products} />
      <StatCard label="Total Orders" value={stats.orders} />
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-gray-500">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}