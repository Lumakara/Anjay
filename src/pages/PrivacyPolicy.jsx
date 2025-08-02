// src/pages/PrivacyPolicy.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const policySections = [
  {
    title: 'Introduction',
    content: [
      'We respect your privacy and are committed to protecting your personal data.',
      'This policy outlines how we collect, use, and safeguard your information.'
    ]
  },
  {
    title: 'Data Collection',
    content: [
      'We collect information you provide directly, such as name, email, and payment details.',
      'We also gather data automatically via cookies and usage analytics.'
    ]
  },
  {
    title: 'Use of Data',
    content: [
      'Your data helps us process orders, send updates, and improve our services.',
      'We do not sell or rent your personal information to third parties.'
    ]
  },
  {
    title: 'Cookies',
    content: [
      'We use cookies to enhance your experience and remember your preferences.',
      'You can disable cookies in your browser settings, but some features may not work properly.'
    ]
  },
  {
    title: 'Third-Party Sharing',
    content: [
      'We share data only with trusted service providers to fulfill orders and send communications.',
      'All partners are bound by confidentiality agreements.'
    ]
  },
  {
    title: 'Children’s Privacy',
    content: [
      'Our services are not directed to children under 16. We do not knowingly collect data from minors.'
    ]
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We may update this policy periodically. Significant changes will be communicated via email or site notice.'
    ]
  },
  {
    title: 'Contact Us',
    content: [
      'If you have any questions about this policy, reach out at privacy@example.com.'
    ]
  }
];

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-16 max-w-3xl mx-auto space-y-8">
      <motion.h1
        className="text-3xl font-display text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Privacy Policy
      </motion.h1>

      <motion.div
        className="space-y-6 text-gray-700 dark:text-gray-300"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {policySections.map((section, idx) => (
          <motion.section
            key={idx}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            {section.content.map((paragraph, pidx) => (
              <p key={pidx} className="leading-relaxed">{paragraph}</p>
            ))}
          </motion.section>
        ))}
      </motion.div>
    </main>
  );
}