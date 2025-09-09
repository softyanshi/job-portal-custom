import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "Welcome to Job Hunt.  By accessing or using our website, you agree to comply with these terms.",
    },
    {
      title: "2. Acceptance of Terms",
      content:
        "By using our website, you confirm that you accept these Terms and Conditions and that you agree to comply with them. If you do not agree with any part of these terms, you must not use our website.",
    },
    {
      title: "3. Changes to Terms",
      content:
        "We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the website after any changes constitutes your acceptance of the new Terms and Conditions.",
    },
    {
      title: "4. User Responsibilities",
      content:
        "You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.",
    },
    {
      title: "5. Intellectual Property",
      content:
        "All content, trademarks, and other intellectual property on the website are owned by or licensed to Job Hunt. You may not reproduce, distribute, or create derivative works from any content without our express written permission.",
    },
    {
      title: "6. Limitation of Liability",
      content:
        "To the fullest extent permitted by law, Job Hunt shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the website.",
    },
   
    {
      title: "7. Contact Information",
      content:
        "If you have any questions about these Terms and Conditions, please contact us at tripaanshi@gmail.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Please read these terms carefully before using our services.
          </p>
          <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
        </motion.div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/70 dark:bg-gray-800/60 shadow-sm rounded-xl p-6 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
                {section.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Anshika Tripathi. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

