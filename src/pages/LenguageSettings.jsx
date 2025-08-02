// src/pages/LanguageSettings.jsx
import { useState, useEffect } from 'react';
import { Listbox } from '@headlessui/react';
import { FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useSettings } from '../utils/useSettings';

const languages = [
  { id: 'en', label: 'English' },
  { id: 'es', label: 'Spanish' },
  { id: 'fr', label: 'French' },
  { id: 'de', label: 'German' },
  { id: 'id', label: 'Indonesian' }
];

export default function LanguageSettings() {
  const { language, setLanguage } = useSettings();
  const [selected, setSelected] = useState(
    languages.find((l) => l.id === language) || languages[0]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (lang) => {
    setSelected(lang);
    setLanguage(lang.id);
  };

  return (
    <main className="pt-24 pb-16 max-w-md mx-auto">
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="flex items-center mb-4">
          <FiGlobe className="text-primary text-xl mr-2" />
          <h1 className="text-2xl font-display">Language & Region</h1>
        </div>

        <Listbox value={selected} onChange={handleChange}>
          <Listbox.Button className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-left">
            {selected.label}
          </Listbox.Button>
          <Listbox.Options className="mt-2 bg-white dark:bg-gray-800 rounded-lg shadow max-h-60 overflow-auto">
            {languages.map((lang) => (
              <Listbox.Option
                key={lang.id}
                value={lang}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 ${
                    active
                      ? 'bg-primary text-white'
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                {lang.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </motion.div>
    </main>
  );
}