import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "This Privacy Policy outlines how we collect, use, and protect your information when you visit our job portal website.",
    },
    {
      title: "2. Information We Collect",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personal Information:</strong>{" "}
            <ul className="list-disc list-inside ml-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Resume/CV</li>
            </ul>
          </li>
          <li>
            <strong>Usage Data:</strong>{" "}
            <ul className="list-disc list-inside ml-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To allow you to participate in interactive features</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve</li>
          <li>To monitor the usage of our services</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>
      ),
    },
    {
      title: "4. Data Security",
      content:
        "We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it.",
    },
    {
      title: "5. Sharing Your Information",
      content: (
        <>
          <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Service providers who assist us in operating our website</li>
            <li>Law enforcement agencies if required by law</li>
          </ul>
        </>
      ),
    },
    {
      title: "6. Your Rights",
      content: (
        <>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Access your personal information</li>
            <li>Request correction of your personal information</li>
            <li>Request deletion of your personal information</li>
          </ul>
        </>
      ),
    },
    {
      title: "7. Changes to This Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
    },
    {
      title: "8. Contact Us",
      content: (
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at <span className="text-blue-600">tripaanshi@gmail.com</span>.
        </p>
      ),
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Learn how we handle your personal information and protect your privacy.
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
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {section.content}
              </div>
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

export default PrivacyPolicy;


