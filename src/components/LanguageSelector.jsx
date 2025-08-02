import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { FiGlobe } from 'react-icons/fi';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'jp', label: '日本語' }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Select Language"
      >
        <FiGlobe size={18} />
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-50">
        {languages.map((lang) => (
          <Menu.Item key={lang.code}>
            {({ active }) => (
              <button
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  localStorage.setItem('i18nextLng', lang.code);
                }}
                className={`w-full text-left px-4 py-2 text-sm ${
                  active ? 'bg-primary text-white' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {lang.label}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}