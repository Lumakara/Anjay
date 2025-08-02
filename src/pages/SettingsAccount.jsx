// src/pages/SettingsAccount.jsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../utils/useAuth';
import { toast } from 'react-toastify';
import avatarPlaceholder from '../assets/images/avatar-placeholder.png';

export default function SettingsAccount() {
  const { user, logout } = useAuth();
  const [form, setForm] = useState({ email: user.email, password: '' });
  const [avatar, setAvatar] = useState(user.avatar || avatarPlaceholder);
  const fileInput = useRef();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
    toast.success('Avatar updated!');
  };

  const handleSave = () => {
    // mock save
    toast.success('Account settings saved!');
    setForm((f) => ({ ...f, password: '' }));
  };

  return (
    <main className="pt-24 pb-16 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow space-y-6"
      >
        <h1 className="text-2xl font-display">Account Settings</h1>

        {/* Avatar */}
        <div className="flex items-center space-x-4">
          <img src={avatar} alt="Avatar" className="w-20 h-20 rounded-full" />
          <button
            onClick={() => fileInput.current.click()}
            className="px-4 py-2 bg-gray-100 rounded-lg"
          >
            Change Photo
          </button>
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </div>

        {/* Email & Password */}
        <div className="space-y-4">
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full px-4 py-2 bg-gray-100 rounded"
          />
          <input
            type="password"
            placeholder="New Password"
            value={form.password}
            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
            className="w-full px-4 py-2 bg-gray-100 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <button onClick={handleSave} className="px-6 py-2 bg-primary text-white rounded-lg">
            Save Changes
          </button>
          <button onClick={logout} className="text-red-500 hover:underline">
            Logout
          </button>
        </div>
      </motion.div>
    </main>
);
}