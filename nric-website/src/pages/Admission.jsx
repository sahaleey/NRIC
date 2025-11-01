import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FiDownload, FiHelpCircle } from "react-icons/fi";

export default function Admission() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Admission form data:", data);
    alert(
      "Thank you for your application! We will review it and contact you soon."
    );
    // TODO: Add axios.post('/api/admission/apply', data)
  };

  return (
    <div className="bg-white dark:bg-nic-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* --- 1. Page Header --- */}
        <div className="text-center mb-12">
          <motion.h1
            className="font-serif text-5xl md:text-6xl font-bold text-nic-dark dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Admissions
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Begin your journey with Nahjurrashad. Apply online or download our
            prospectus.
          </motion.p>
        </div>

        {/* --- 2. Main Content Grid (Form + Info) --- */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* --- Column 1: Admission Form --- */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="font-serif text-3xl font-bold text-nic-dark dark:text-white mb-6">
              Apply Online
            </h2>

            {/* Form Fields */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Student's Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Full name is required" })}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-nic-green focus:border-nic-green dark:bg-gray-700 dark:border-gray-600"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                {...register("dob", { required: "Date of Birth is required" })}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-nic-green focus:border-nic-green dark:bg-gray-700 dark:border-gray-600"
              />
              {errors.dob && (
                <span className="text-red-500 text-sm">
                  {errors.dob.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="guardian"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Guardian's Name
              </label>
              <input
                type="text"
                id="guardian"
                {...register("guardian", {
                  required: "Guardian's name is required",
                })}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-nic-green focus:border-nic-green dark:bg-gray-700 dark:border-gray-600"
              />
              {errors.guardian && (
                <span className="text-red-500 text-sm">
                  {errors.guardian.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: "Phone number is required" })}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-nic-green focus:border-nic-green dark:bg-gray-700 dark:border-gray-600"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Course Applying For
              </label>
              <select
                id="course"
                {...register("course", { required: "Please select a course" })}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-nic-green focus:border-nic-green dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="">Select a course</option>
                <option value="senior-secondary">
                  Senior Secondary (Arts)
                </option>
                <option value="degree-islamic">Degree (Islamic Studies)</option>
                <option value="diploma-cs">Diploma (Computer Science)</option>
              </select>
              {errors.course && (
                <span className="text-red-500 text-sm">
                  {errors.course.message}
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-nic-green text-white font-bold py-3 px-6 rounded-md shadow-lg 
                           hover:bg-opacity-90 transition-colors duration-300"
              >
                Submit Application
              </button>
            </div>
          </motion.form>

          {/* --- Column 2: Info & FAQs --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {/* Download Prospectus */}
            <div className="bg-nic-green text-white p-6 rounded-lg shadow-lg mb-8 text-center">
              <FiDownload className="text-4xl mx-auto mb-2" />
              <h3 className="font-serif text-2xl font-bold mb-2">
                Download Prospectus
              </h3>
              <p className="mb-4">
                Get the complete details on our courses, fee structure, and
                campus rules.
              </p>
              <a
                href="/prospectus.pdf" // ❗ Add this file to your /public folder
                download
                className="inline-block bg-nic-gold text-white font-bold py-2 px-6 rounded-full 
                           hover:bg-opacity-90 transition-colors"
              >
                Download PDF
              </a>
            </div>

            {/* FAQs */}
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-bold text-nic-dark dark:text-white mb-4">
                <FiHelpCircle className="inline-block mr-2" />
                Frequently Asked Questions
              </h3>

              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-lg text-nic-dark dark:text-white">
                  What are the eligibility criteria?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  For the Senior Secondary course, students must have
                  successfully completed SSLC. For Degree programs, students
                  must have completed a relevant Plus Two course.
                </p>
              </div>

              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-lg text-nic-dark dark:text-white">
                  What is the fee structure?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We are a non-profit institution. Fees are minimal and cover
                  only basic academic and hostel expenses. Please download the
                  prospectus for a detailed breakdown.
                </p>
              </div>

              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-lg text-nic-dark dark:text-white">
                  Is hostel accommodation mandatory?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, NIC is a residential campus. All students are required to
                  stay in the college hostel to ensure a fully immersive
                  spiritual and academic environment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
