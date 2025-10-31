import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Terms() {
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
            Terms of Service
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
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using the Nahjurrashad Islamic College website (the
            "Site"), you accept and agree to be bound by the terms and
            provisions of this agreement.
          </p>

          <h3>2. Use of the Site</h3>
          <p>
            This Site is intended to provide information about our college,
            academic programs, and campus life. You agree to use this site only
            for lawful purposes and in a way that does not infringe upon the
            rights of, restrict, or inhibit anyone else's use and enjoyment of
            the Site.
          </p>

          <h3>3. Intellectual Property</h3>
          <p>
            All content included on this Site, such as text, graphics, logos,
            images, and blog posts, is the property of Nahjurrashad Islamic
            College or its content suppliers and is protected by international
            copyright laws. You may not reproduce, modify, or distribute any
            content without our express written permission.
          </p>

          <h3>4. User Conduct</h3>
          <p>You agree not to use the site to:</p>
          <ul>
            <li>
              Submit false or misleading information, including on admission or
              contact forms.
            </li>
            <li>
              Attempt to gain unauthorized access to our servers, database, or
              any part of the Site.
            </li>
            <li>
              Engage in any conduct that is unlawful, offensive, or harmful.
            </li>
          </ul>

          <h3>5. Disclaimers</h3>
          <p>
            The information on this Site is provided on an "as is" basis. We
            make no warranties, expressed or implied, regarding the accuracy,
            completeness, or reliability of any information. We reserve the
            right to make changes to academic programs, fees, and other
            information at any time without prior notice.
          </p>

          <h3>6. Limitation of Liability</h3>
          <p>
            In no event shall Nahjurrashad Islamic College be liable for any
            direct, indirect, or consequential damages arising out of your use
            of, or inability to use, the Site.
          </p>

          <h3>7. Governing Law</h3>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of India, and you submit to the exclusive jurisdiction of
            the courts in Thrissur, Kerala.
          </p>

          <h3>8. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please
            <Link to="/contact"> contact us</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
