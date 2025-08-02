import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import LoadingAnimation from './pages/LoadingAnimation';
import Index from './pages/Index';
import AdminLayout from './layouts/AdminLayout';
import DashboardHome from './pages/admin/DashboardHome';
import ManageUsers from './pages/admin/ManageUsers';
import ManageProducts from './pages/admin/ManageProducts';
import ManageOrders from './pages/admin/ManageOrders';

// ... import other pages

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary-light to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Navigate to="/loading" replace />} />
          <Route path="/loading" element={<LoadingAnimation />} />
          <Route path="/home" element={<Index />} />
          <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="orders" element={<ManageOrders />} />
          {/* ... other routes ... */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <BottomNav />
    </div>
  );
}