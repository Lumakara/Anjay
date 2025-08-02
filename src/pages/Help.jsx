// src/pages/Help.jsx
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const faqs = [
  {
    q: 'How do I place an order?',
    a: 'Simply browse products, add to cart, and proceed to checkout.'
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept all major credit cards, PayPal, and Apple Pay.'
  },
  {
    q: 'How can I track my shipment?',
    a: 'Go to Profile → Orders and click “Track” on your order.'
  }
];

export default function Help() {
  const [contact, setContact] = useState({ email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Your message has been sent!');
    setContact({ email: '', message: '' });
  };

  return (
    <main className="pt-24 pb-16 max-w-3xl mx-auto space-y-12">
      <motion.h1
        className="text-3xl font-display text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Help & FAQ
      </motion.h1>

      {/* FAQ Section */}
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <motion.div
                className="border rounded-lg bg-white dark:bg-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Disclosure.Button className="w-full px-6 py-4 flex justify-between items-center">
                  <span>{item.q}</span>
                  {open ? <FiChevronUp /> : <FiChevronDown />}
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  {item.a}
                </Disclosure.Panel>
              </motion.div>
            )}
          </Disclosure>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h2 className="text-2xl font-display">Contact Us</h2>
        <input
          type="email"
          required
          placeholder="Your email"
          value={contact.email}
          onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
          className="w-full px-4 py-2 bg-gray-100 rounded"
        />
        <textarea
          required
          rows="4"
          placeholder="Your message"
          value={contact.message}
          onChange={(e) => setContact((c) => ({ ...c, message: e.target.value }))}
          className="w-full px-4 py-2 bg-gray-100 rounded"
        />
        <button className="px-6 py-2 bg-primary text-white rounded-lg">
          Send Message
        </button>
      </motion.form>
    </main>
);
}