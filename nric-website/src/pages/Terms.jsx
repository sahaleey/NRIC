import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiFileText,
  FiShield,
  FiUserCheck,
  FiAlertTriangle,
  FiBook,
  FiGlobe,
  FiMail,
  FiRefreshCw,
} from "react-icons/fi";

export default function Terms() {
  const termsSections = [
    {
      icon: FiUserCheck,
      title: "Acceptance of Terms",
      content:
        "By accessing our website, you agree to be bound by these terms and our Privacy Policy.",
      color: "emerald",
    },
    {
      icon: FiBook,
      title: "Proper Use",
      content:
        "Use this site for lawful purposes related to college information and academic inquiries.",
      color: "blue",
    },
    {
      icon: FiShield,
      title: "Intellectual Property",
      content:
        "All content is protected by copyright laws. Unauthorized reproduction is prohibited.",
      color: "amber",
    },
    {
      icon: FiAlertTriangle,
      title: "User Responsibilities",
      content:
        "Users must provide accurate information and refrain from harmful activities.",
      color: "red",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const colorMap = {
    emerald: { bg: "bg-emerald-500", text: "text-emerald-600" },
    blue: { bg: "bg-blue-500", text: "text-blue-600" },
    amber: { bg: "bg-amber-500", text: "text-amber-600" },
    red: { bg: "bg-red-500", text: "text-red-600" },
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 py-20 md:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700">
              <FiFileText className="size-4" />
              Legal Agreement
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Terms of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Service
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
          >
            Please read these terms carefully before using our website. These
            terms govern your access to and use of Nahjurrashad Islamic
            College's online services and resources.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <FiRefreshCw className="size-4" />
              <span>Last updated: October 30, 2025</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <FiFileText className="size-4" />
              <span>Version 1.2</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Terms Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {termsSections.map((section, index) => {
            const IconComponent = section.icon;
            const colors = colorMap[section.color];

            return (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`size-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <IconComponent className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Terms Content */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="p-8 lg:p-12">
            <div className="prose dark:prose-invert lg:prose-lg max-w-none text-gray-700 dark:text-gray-300">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Introduction
                </h2>
                <p className="leading-relaxed">
                  Welcome to the official website of{" "}
                  <strong>Nahjurrashad Islamic College</strong>. These Terms of
                  Service ("Terms") govern your access to and use of our
                  website, services, and applications (collectively, the
                  "Services").
                </p>
                <p className="leading-relaxed mt-4">
                  By accessing or using our Services, you agree to be bound by
                  these Terms and our{" "}
                  <Link
                    to="/privacy"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Privacy Policy
                  </Link>
                  . If you disagree with any part of the terms, you may not
                  access our Services.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <FiUserCheck className="text-emerald-600" />
                  1. Acceptance of Terms
                </h3>
                <p className="leading-relaxed">
                  By accessing and using the Nahjurrashad Islamic College
                  website (the "Site"), you accept and agree to be bound by the
                  terms and provisions of this agreement. Your continued use of
                  the Site following the posting of any changes to these Terms
                  constitutes acceptance of those changes.
                </p>
              </div>

              {/* Use of the Site */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Use of the Site
                </h3>
                <p className="leading-relaxed mb-4">
                  This Site is intended to provide information about our
                  college, academic programs, campus life, admission procedures,
                  and related educational services. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    Use this site only for lawful purposes and in accordance
                    with these Terms
                  </li>
                  <li>
                    Provide accurate and complete information in all forms and
                    applications
                  </li>
                  <li>Respect the rights and privacy of other users</li>
                  <li>
                    Not engage in any conduct that restricts or inhibits
                    anyone's use of the Site
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Prohibited activities include but are not limited to:
                  unauthorized access attempts, data scraping, distribution of
                  malware, and any activity that could damage, disable, or
                  impair the Site's functionality.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <FiShield className="text-amber-600" />
                  3. Intellectual Property Rights
                </h3>
                <p className="leading-relaxed mb-4">
                  All content included on this Site, unless otherwise indicated,
                  is the property of Nahjurrashad Islamic College or its content
                  suppliers and protected by international copyright, trademark,
                  and other intellectual property laws. This includes but is not
                  limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Text, graphics, logos, and images</li>
                  <li>Academic curriculum and course materials</li>
                  <li>Website design, layout, and user interface</li>
                  <li>Photographs, videos, and multimedia content</li>
                </ul>
                <p className="leading-relaxed">
                  You may not reproduce, modify, distribute, display, perform,
                  or create derivative works from any content without our
                  express written permission. Limited personal, non-commercial
                  use is permitted for educational purposes.
                </p>
              </div>

              {/* User Conduct and Responsibilities */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <FiAlertTriangle className="text-red-600" />
                  4. User Conduct and Responsibilities
                </h3>
                <p className="leading-relaxed mb-4">
                  You agree not to use the Site to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    Submit false, inaccurate, or misleading information in
                    admission or contact forms
                  </li>
                  <li>
                    Impersonate any person or entity or misrepresent your
                    affiliation
                  </li>
                  <li>
                    Attempt to gain unauthorized access to our servers,
                    databases, or any restricted areas
                  </li>
                  <li>
                    Engage in any unlawful, offensive, threatening, or harmful
                    conduct
                  </li>
                  <li>
                    Upload or transmit viruses, malware, or any destructive code
                  </li>
                  <li>
                    Interfere with or disrupt the integrity or performance of
                    the Site
                  </li>
                  <li>
                    Collect or harvest any information from the Site through
                    automated means
                  </li>
                </ul>
              </div>

              {/* Disclaimers */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  5. Disclaimers and Limitations
                </h3>
                <p className="leading-relaxed mb-4">
                  The information on this Site is provided on an "as is" and "as
                  available" basis. While we strive to provide accurate and
                  up-to-date information, we make no warranties, expressed or
                  implied, regarding:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    The accuracy, completeness, or reliability of any
                    information
                  </li>
                  <li>The uninterrupted or error-free operation of the Site</li>
                  <li>The correction of any defects or errors</li>
                  <li>The absence of viruses or other harmful components</li>
                </ul>
                <p className="leading-relaxed">
                  We reserve the right to modify, update, or remove any content,
                  including academic program details, fee structures, and
                  admission requirements, at any time without prior notice.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  6. Limitation of Liability
                </h3>
                <p className="leading-relaxed">
                  To the fullest extent permitted by applicable law,
                  Nahjurrashad Islamic College shall not be liable for any
                  direct, indirect, incidental, special, consequential, or
                  punitive damages, including but not limited to damages for
                  loss of profits, data, or other intangible losses, resulting
                  from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Your access to or use of or inability to access or use the
                    Services
                  </li>
                  <li>
                    Any conduct or content of any third party on the Services
                  </li>
                  <li>Any content obtained from the Services</li>
                  <li>
                    Unauthorized access, use, or alteration of your
                    transmissions or content
                  </li>
                </ul>
              </div>

              {/* Governing Law */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <FiGlobe className="text-blue-600" />
                  7. Governing Law and Jurisdiction
                </h3>
                <p className="leading-relaxed">
                  These Terms shall be governed by and construed in accordance
                  with the laws of India, without regard to its conflict of law
                  provisions. You agree to submit to the personal and exclusive
                  jurisdiction of the courts located in Thrissur, Kerala for the
                  resolution of any disputes.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  8. Changes to Terms
                </h3>
                <p className="leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, we
                  will provide at least 30 days' notice prior to any new terms
                  taking effect. What constitutes a material change will be
                  determined at our sole discretion.
                </p>
                <p className="leading-relaxed mt-4">
                  By continuing to access or use our Services after those
                  revisions become effective, you agree to be bound by the
                  revised terms.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  9. Contact Information
                </h3>
                <p className="leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Email:</strong> example@nahjurrashad.edu
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Phone:</strong> +91 00000 00000
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Address:</strong> Nahjurrashad Islamic College,
                    Chamakkala, Thrissur, Kerala - 680568
                  </p>
                </div>
                <p className="leading-relaxed mt-4">
                  For general inquiries, you can also{" "}
                  <Link
                    to="/contact"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    contact us through our website
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Agreement Confirmation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
            <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4">
              Agreement Confirmation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              By using our website and services, you acknowledge that you have
              read, understood, and agree to be bound by these Terms of Service
              and our Privacy Policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/privacy"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                <FiShield className="size-4" />
                View Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-full border border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105"
              >
                <FiMail className="size-4" />
                Contact Legal Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
