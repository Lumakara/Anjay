// src/layouts/AdminLayout.jsx
import { NavLink, Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-4">
          <NavLink to="/admin" end className="block hover:text-primary">
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className="block hover:text-primary">
            Users
          </NavLink>
          <NavLink to="/admin/products" className="block hover:text-primary">
            Products
          </NavLink>
          <NavLink to="/admin/orders" className="block hover:text-primary">
            Orders
          </NavLink>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}