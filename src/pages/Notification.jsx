// src/pages/Notification.jsx
import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { FiBell, FiMail, FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useSettings } from '../utils/useSettings';

export default function Notification() {
  const { notifications, setNotifications } = useSettings();
  const [email, setEmail] = useState(notifications.email);
  const [sms, setSms] = useState(notifications.sms);
  const [push, setPush] = useState(notifications.push);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setNotifications({ email, sms, push });
  }, [email, sms, push, setNotifications]);

  return (
    <main className="pt-24 pb-16 max-w-md mx-auto">
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="flex items-center">
          <FiBell className="text-primary text-2xl mr-2" />
          <h1 className="text-2xl font-display">Notifications</h1>
        </div>

        <Toggle
          icon={<FiMail />}
          label="Email Notifications"
          enabled={email}
          onChange={setEmail}
        />
        <Toggle
          icon={<FiSmartphone />}
          label="SMS Notifications"
          enabled={sms}
          onChange={setSms}
        />
        <Toggle
          icon={<FiBell />}
          label="Push Notifications"
          enabled={push}
          onChange={setPush}
        />
      </motion.div>
    </main>
);

function Toggle({ icon, label, enabled, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-xl mr-3">{icon}</div>
        <span>{label}</span>
      </div>
      <Switch
        checked={enabled}
        onChange={onChange}
        className={`${
          enabled ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-600'
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
      >
        <span className="sr-only">{label}</span>
        <span
          className={`transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 bg-white rounded-full transition-transform`}
        />
      </Switch>
    </div>
  );
}