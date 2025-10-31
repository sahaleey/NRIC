import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin, FiMessageCircle } from "react-icons/fi";

export default function ContactCTA() {
  const contactMethods = [
    {
      icon: FiMail,
      label: "Email Us",
      value: "admissions@nahjurrashad.edu",
      link: "mailto:admissions@nahjurrashad.edu",
    },
    {
      icon: FiPhone,
      label: "Call Us",
      value: "+91 4872 123 456",
      link: "tel:+914872123456",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Chamakkala, Thrissur, Kerala, India",
      link: "https://www.bing.com/maps/search?name=NAHJURRASHAD+ISLAMIC+COLLEGE&trfc=&mepi=0%7E%7EEmbedded%7ELargeMapLink&FORM=MPSRPL&style=r&q=NAHJURRASHAD+ISLAMIC+COLLEGE&ss=id.ypid%3AYN4070x6951068502097621561&ppois=10.352326393127441_76.11244201660156_NAHJURRASHAD+ISLAMIC+COLLEGE&cp=10.352326%7E76.112442&lvl=16",
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <section className="relative py-20 md:py-28 bg-linear-to-b from-emerald-50 via-white to-green-50 dark:from-gray-900/50 dark:via-gray-700 dark:to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 size-32 bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 size-40 bg-amber-200/20 dark:bg-amber-800/10 rounded-full blur-3xl"></div>

        {/* Islamic pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M30 30 L45 15 L45 45 L30 30 L15 45 L15 15 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative m-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-200 dark:border-emerald-700">
              <FiMessageCircle className="size-4" />
              We're Here to Help
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Start Your Journey?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're a prospective student exploring admissions, a
              parent seeking information, or a researcher looking for
              collaboration, our team is here to guide you every step of the
              way.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={method.label}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Link to={method.link} className="block group">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center">
                        <div className="size-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="size-6 text-white" />
                        </div>

                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {method.label}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Primary CTA */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
              >
                <span>Send Us a Message</span>
                <svg
                  className="size-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Typically respond within 24 hours • Office hours: 9 AM - 5 PM,
              Monday - Friday
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
