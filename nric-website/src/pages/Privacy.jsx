import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiShield,
  FiFileText,
  FiUser,
  FiMail,
  FiLock,
  FiRefreshCw,
} from "react-icons/fi";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  const policySections = [
    {
      icon: FiUser,
      title: "Information Collection",
      content:
        "We collect personal information for admission processing, contact responses, and site improvement. This includes name, email, phone number, and other relevant details.",
      color: "emerald",
    },
    {
      icon: FiShield,
      title: "Data Protection",
      content:
        "Your personal information is protected using industry-standard security measures. We implement appropriate technical and organizational security measures to protect your data.",
      color: "blue",
    },
    {
      icon: FiFileText,
      title: "Information Usage",
      content:
        "We use your information to operate our website, process applications, respond to inquiries, send updates (if opted-in), and analyze site usage for service improvement.",
      color: "amber",
    },
    {
      icon: FiLock,
      title: "Information Sharing",
      content:
        "We do not sell or trade your personal information. Limited sharing occurs only with trusted service providers essential for our operations, under strict confidentiality agreements.",
      color: "violet",
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
    violet: { bg: "bg-violet-500", text: "text-violet-600" },
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 py-20 md:py-28 min-h-screen">
      <Helmet>
        <title>Nahjurrashad Islamic College | Privacy</title>
        <meta
          name="description"
          content="Official website of Nahjurrashad Islamic College (NRIC), Chamakkala. An institute blending Islamic scholarship with modern education and moral excellence."
        />

        <link
          rel="canonical"
          href="https://nric-chamakkala.vercel.app/privacy"
        />
      </Helmet>
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
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200 dark:border-emerald-700">
              <FiShield className="size-4" />
              Data Protection
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Privacy{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Policy
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
          >
            Your privacy is important to us. This policy explains how
            Nahjurrashad Islamic College collects, uses, and protects your
            personal information.
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
              <span>Version 2.1</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Policy Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {policySections.map((section, index) => {
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

        {/* Detailed Policy Content */}
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
                  <strong>Nahjurrashad Islamic College</strong> ("us", "we", or
                  "our") operates the nahjurrashad.edu website (the "Site").
                  This Privacy Policy informs you of our policies regarding the
                  collection, use, and disclosure of personal information we
                  receive from users of the Site.
                </p>
                <p className="leading-relaxed mt-4">
                  We are committed to protecting your privacy and ensuring that
                  your personal information is collected and used properly,
                  lawfully, and transparently.
                </p>
              </div>

              {/* Information Collection and Use */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <FiUser className="text-emerald-600" />
                  1. Information Collection and Use
                </h3>
                <p className="leading-relaxed mb-4">
                  While using our Site, we may ask you to provide us with
                  certain personally identifiable information that can be used
                  to contact or identify you. Personally identifiable
                  information may include, but is not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Full name and contact details</li>
                  <li>Email address and phone number</li>
                  <li>Academic background and qualifications</li>
                  <li>Emergency contact information</li>
                </ul>
                <p className="leading-relaxed">
                  We collect this information for the purpose of processing
                  admission applications, responding to contact inquiries,
                  providing educational services, and improving the Site
                  experience.
                </p>
              </div>

              {/* Log Data */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Log Data
                </h3>
                <p className="leading-relaxed">
                  Like many site operators, we collect information that your
                  browser sends whenever you visit our Site ("Log Data"). This
                  Log Data may include information such as your computer's
                  Internet Protocol ("IP") address, browser type, browser
                  version, the pages of our Site that you visit, the time and
                  date of your visit, the time spent on those pages, and other
                  statistics.
                </p>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <FiMail className="text-blue-600" />
                  3. How We Use Your Information
                </h3>
                <p className="leading-relaxed mb-4">
                  We use the collected information for various purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    To operate, maintain, and improve our website and services
                  </li>
                  <li>
                    To process your admission application and academic
                    registration
                  </li>
                  <li>
                    To respond to your inquiries and provide customer support
                  </li>
                  <li>
                    To send you newsletters, event updates, or administrative
                    communications (with your consent)
                  </li>
                  <li>To monitor and analyze site usage patterns and trends</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>
                    To comply with legal obligations and educational regulations
                  </li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <FiLock className="text-violet-600" />
                  4. Information Sharing and Disclosure
                </h3>
                <p className="leading-relaxed mb-4">
                  We do not sell, trade, or rent your Personal Information to
                  third parties for marketing purposes. We may share information
                  in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    With trusted third-party service providers who assist us in
                    operating our website and conducting our business
                  </li>
                  <li>When required by law or to respond to legal process</li>
                  <li>
                    To protect the rights and property of Nahjurrashad Islamic
                    College
                  </li>
                  <li>
                    In connection with any merger, sale of company assets, or
                    acquisition
                  </li>
                </ul>
                <p className="leading-relaxed">
                  All third-party service providers are obligated to protect
                  your information and use it only for the purposes we specify.
                </p>
              </div>

              {/* Security */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  5. Data Security
                </h3>
                <p className="leading-relaxed mb-4">
                  The security of your Personal Information is important to us.
                  We implement appropriate technical and organizational security
                  measures designed to protect your personal information against
                  accidental or unlawful destruction, loss, alteration,
                  unauthorized disclosure, or access.
                </p>
                <p className="leading-relaxed">
                  However, remember that no method of transmission over the
                  Internet, or method of electronic storage, is 100% secure.
                  While we strive to use commercially acceptable means to
                  protect your Personal Information, we cannot guarantee its
                  absolute security.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  6. Changes to This Privacy Policy
                </h3>
                <p className="leading-relaxed">
                  This Privacy Policy is effective as of October 30, 2025 and
                  will remain in effect except with respect to any changes in
                  its provisions in the future, which will be in effect
                  immediately after being posted on this page.
                </p>
                <p className="leading-relaxed mt-4">
                  We reserve the right to update or change our Privacy Policy at
                  any time, and you should check this Privacy Policy
                  periodically. Your continued use of the Service after we post
                  any modifications to the Privacy Policy on this page will
                  constitute your acknowledgment of the modifications and your
                  consent to abide and be bound by the modified Privacy Policy.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  7. Contact Us
                </h3>
                <p className="leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, your
                  personal information, or our data practices, please don't
                  hesitate to contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Email:</strong> nahjurrashad@gmail.com
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
                  You can also{" "}
                  <Link
                    to="/contact"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                  >
                    contact us through our website
                  </Link>{" "}
                  for general inquiries.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
