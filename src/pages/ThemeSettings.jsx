// src/pages/ThemeSettings.jsx
import { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useSettings } from '../utils/useSettings';

const themeOptions = [
  { id: 'light', label: 'Light', icon: <FiSun /> },
  { id: 'dark', label: 'Dark', icon: <FiMoon /> },
  { id: 'system', label: 'System', icon: <FiMonitor /> }
];

export default function ThemeSettings() {
  const { theme, setTheme } = useSettings();
  const [selected, setSelected] = useState(
    themeOptions.find((t) => t.id === theme) || themeOptions[2]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setTheme(option.id);
  };

  return (
    <main className="pt-24 pb-16 max-w-md mx-auto">
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-display">Theme</h1>
        <RadioGroup value={selected} onChange={handleSelect}>
          <RadioGroup.Label className="sr-only">Theme</RadioGroup.Label>
          <div className="space-y-2">
            {themeOptions.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ active, checked }) =>
                  `flex items-center p-3 rounded-lg border ${
                    checked
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                  } ${active ? 'ring-2 ring-primary ring-offset-2' : ''}`
                }
              >
                <div className="text-xl mr-3">{option.icon}</div>
                <RadioGroup.Label as="span">{option.label}</RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </motion.div>
    </main>
  );
}