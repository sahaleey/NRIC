import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiUser,
  FiMessageCircle,
  FiSend,
  FiClock,
} from "react-icons/fi";
import SEO from "../components/SEO";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // 1. Show a loading state is handled by 'isSubmitting' in the hook-form

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // ⚠️ IMPORTANT: Go to web3forms.com, enter your email, and get your OWN Access Key.
          // The key below is just a placeholder/example.
          access_key: "03e1bcc1-92a6-46a7-bdc6-712659d08a53",
          from_name: "NRIC Website", // Optional: Customizes the "From" name in your inbox
          subject: `New Inquiry: ${data.subject}`, // Custom subject line
          ...data,
        }),
      });

      const result = await response.json();

      // 2. Check if the email was actually sent
      if (result.success) {
        alert(
          "✅ Message sent successfully! Our administration will contact you shortly."
        );
        reset(); // Clears the form only on success
      } else {
        alert("⚠️ Something went wrong: " + result.message);
      }
    } catch (error) {
      alert("❌ Connection error. Please try again later.");
      console.error("Form Error:", error);
    }
  };
  const contactMethods = [
    {
      icon: FiMapPin,
      title: "Visit Our Campus",
      details:
        "Nahjurrashad Islamic College, Chamakkala, Thrissur, Kerala - 680687",
      description:
        "Located in the serene surroundings of Chamakkala, easily accessible from Thrissur city",
      color: "emerald",
    },
    {
      icon: FiPhone,
      title: "Call Us",
      details: "0480 2837745, 9846902564",
      description:
        "Available during office hours: 9:00 AM - 5:00 PM, Monday - Friday",
      color: "blue",
    },
    {
      icon: FiMail,
      title: "Email Us",
      details: "nahjurrashad@gmail.com",
      description: "We typically respond within 24 hours during working days",
      color: "amber",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const colorMap = {
    emerald: {
      bg: "bg-emerald-500",
      text: "text-emerald-600",
      border: "border-emerald-200",
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    amber: {
      bg: "bg-amber-500",
      text: "text-amber-600",
      border: "border-amber-200",
    },
    green: {
      bg: "bg-green-500",
      text: "text-green-600",
      border: "border-green-200",
    },
  };

  return (
    <div className="bg-linear-to-b from-white to-gray-50/50   py-20 md:py-28">
      <SEO
        title="Contact Us"
        description="Get in touch with NRIC Chamakkala. Find our phone numbers, email addresses, and campus location."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50  text-emerald-700  px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200 ">
              <FiMessageCircle className="size-4" />
              Get In Touch
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900  mb-6"
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Our College
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600  leading-relaxed"
          >
            We're here to help you with admissions, campus visits, and any
            questions about our integrated Islamic education programs. Reach out
            through any channel below.
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-16"
        >
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            const colors = colorMap[method.color];

            return (
              <motion.div
                key={method.title}
                variants={itemVariants}
                className="bg-white  rounded-2xl p-6 shadow-lg border border-gray-200  text-center group hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`inline-flex size-16 ${colors.bg} rounded-xl items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="size-7 text-white" />
                </div>

                <h3 className="font-serif text-lg font-bold text-gray-900  mb-2">
                  {method.title}
                </h3>

                <p className="text-gray-900  font-semibold mb-2">
                  {method.details}
                </p>

                <p className="text-gray-600  text-sm leading-relaxed">
                  {method.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white  rounded-2xl shadow-xl border border-gray-200  p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <FiSend className="size-6 text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 ">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600  text-sm">
                    We'll contact you via WhatsApp
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className=" text-sm font-semibold text-gray-900  mb-3 flex items-center gap-2">
                    <FiUser className="size-4 text-emerald-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className="w-full px-4 py-3 bg-gray-50  border border-gray-300  rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className=" text-sm font-semibold text-gray-900  mb-3 flex items-center gap-2">
                    <FiMail className="size-4 text-emerald-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className="w-full px-4 py-3 bg-gray-50  border border-gray-300  rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900  mb-3">
                    Subject
                  </label>
                  <select
                    {...register("subject", {
                      required: "Please select a subject",
                    })}
                    className="w-full px-4 py-3 bg-gray-50  border border-gray-300  rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="Admission Inquiry">Admission Inquiry</option>
                    <option value="Campus Visit">Campus Visit Request</option>
                    <option value="Academic Programs">Academic Programs</option>
                    <option value="Fee Structure">Fee Structure</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className=" text-sm font-semibold text-gray-900  mb-3 flex items-center gap-2">
                    <FiMessageCircle className="size-4 text-emerald-600" />
                    Your Message
                  </label>
                  <textarea
                    rows="5"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    className="w-full px-4 py-3 bg-gray-50  border border-gray-300  rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your inquiry or how we can help you..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  <FiSend className="size-5" />
                  {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                </motion.button>

                <p className="text-center text-gray-500  text-sm">
                  📱 Your message will open in WhatsApp for final sending
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Campus Information */}
            <div className="bg-white  rounded-2xl shadow-xl border border-gray-200  p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900  mb-6">
                Campus Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FiClock className="size-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900  mb-2">
                      Office Hours
                    </h4>
                    <p className="text-gray-600 ">
                      Saturday - Thursday: 6:00 AM - 7:45 PM & 4:45 PM - 6:00 PM
                      <br />
                      Friday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FiMapPin className="size-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900  mb-2">
                      Campus Address
                    </h4>
                    <p className="text-gray-600  leading-relaxed">
                      Nahjurrashad Islamic College
                      <br />
                      Chamakkala, Thrissur
                      <br />
                      Kerala, India - 680687
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white  rounded-2xl shadow-xl border border-gray-200  overflow-hidden">
              <div className="p-6 border-b border-gray-200 ">
                <h3 className="font-serif text-xl font-bold text-gray-900  flex items-center gap-2">
                  <FiMapPin className="size-5 text-emerald-600" />
                  Find Our Campus
                </h3>
              </div>
              <iframe
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Nahjurrashad%20Islamic%20College&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Nahjurrashad Islamic College Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
