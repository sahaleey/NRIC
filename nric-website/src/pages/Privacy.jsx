import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="bg-white dark:bg-nic-dark py-16 md:py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* --- 1. Page Header --- */}
        <div className="text-center mb-12">
          <motion.h1
            className="font-serif text-5xl md:text-6xl font-bold text-nic-dark dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-lg text-gray-500 dark:text-gray-400 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Last updated: October 30, 2025
          </motion.p>
        </div>

        {/* --- 2. Content --- */}
        <motion.div
          className="prose dark:prose-invert lg:prose-lg max-w-none text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p>
            Nahjurrashad Islamic College ("us", "we", or "our") operates the
            nahjurrashad.edu (the "Site"). This page informs you of our policies
            regarding the collection, use, and disclosure of personal
            information we receive from users of the Site.
          </p>

          <h3>1. Information Collection and Use</h3>
          <p>
            While using our Site, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. Personally identifiable information may include, but
            is not limited to, your name, email address, phone number, and date
            of birth ("Personal Information").
          </p>
          <p>
            We collect this information for the purpose of processing admission
            applications, responding to contact inquiries, and improving the
            Site.
          </p>

          <h3>2. Log Data</h3>
          <p>
            Like many site operators, we collect information that your browser
            sends whenever you visit our Site ("Log Data"). This Log Data may
            include information such as your computer's Internet Protocol ("IP")
            address, browser type, browser version, the pages of our Site that
            you visit, the time and date of your visit, and other statistics.
          </p>

          <h3>3. How We Use Your Information</h3>
          <ul>
            <li>To operate and maintain our website.</li>
            <li>
              To process your admission application and respond to your
              inquiries.
            </li>
            <li>
              To send you newsletters, event updates, or administrative
              communications, if you have opted in.
            </li>
            <li>To analyze site usage and improve our services.</li>
          </ul>

          <h3>4. Information Sharing</h3>
          <p>
            We do not sell, trade, or rent your Personal Information to others.
            We may share information with third-party service providers only to
            the extent necessary to provide our services (e.g., email delivery
            via Resend or Nodemailer). These third parties are obligated to keep
            your information confidential.
          </p>

          <h3>5. Security</h3>
          <p>
            The security of your Personal Information is important to us, but
            remember that no method of transmission over the Internet, or method
            of electronic storage, is 100% secure. We use commercially
            acceptable means to protect your Personal Information, but we cannot
            guarantee its absolute security.
          </p>

          <h3>6. Changes to This Privacy Policy</h3>
          <p>
            This Privacy Policy is effective as of the date stated above and
            will remain in effect except with respect to any changes in its
            provisions in the future, which will be in effect immediately after
            being posted on this page.
          </p>

          <h3>7. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please
            <Link to="/contact"> contact us</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
