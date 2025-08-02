// src/pages/RegisterPage.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useAuth } from '../utils/useAuth';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const { login } = useAuth(); // reuse login to mock registration
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // mock register: directly log in
    login({ email: form.email, password: form.password });
    toast.success('Registered successfully!');
    navigate('/home');
  };

  return (
    <main className="pt-24 pb-16 flex items-center justify-center">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow"
      >
        <h1 className="text-2xl font-display mb-6 text-center">Register</h1>
        <input
          type="text"
          required
          placeholder="Name"
          className="w-full px-4 py-2 mb-4 bg-gray-100 rounded"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 bg-gray-100 rounded"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 bg-gray-100 rounded"
          value={form.password}
          onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
        />
        <button className="w-full py-2 bg-primary text-white rounded-lg mb-4">
          Register
        </button>
        <p className="text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </motion.form>
    </main>
);
}