import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCopy,
  FiCheck,
  FiCreditCard,
  FiSmartphone,
  FiHeart,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/SEO";

export default function Donate() {
  const [copiedField, setCopiedField] = useState(null);

  // --- Real Bank Details ---
  const bankDetails = {
    accountName: "Nahjurrashad Trust",
    accountNumber: "50200003809753",
    ifsc: "HDFC0001536",
    bankName: "HDFC Bank",
    branch: "Chenthrapinni Branch",
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50  py-20 md:py-28">
      <SEO
        title="Donate - Support Our Vision"
        description="Contribute to Nahjurrashad Islamic College. Your Sadaqah Jariyah helps nurture the next generation of scholars."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-emerald-100  rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FiHeart className="size-10 text-emerald-600 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-gray-900  mb-6"
          >
            Invest in the <span className="text-emerald-600">Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600  max-w-2xl mx-auto leading-relaxed"
          >
            "When a person dies, his deeds come to an end except for three:
            <span className="font-semibold text-emerald-700 ">
              {" "}
              Sadaqah Jariyah
            </span>
            , knowledge from which benefit is gained, or a righteous child who
            prays for him."
            <span className="block mt-2 text-sm text-gray-500 italic">
              — Sahih Muslim
            </span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* --- CARD 1: Direct Bank Transfer --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white  rounded-3xl p-8 shadow-xl border border-gray-200  relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-8 -mt-8"></div>

            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-50  rounded-xl">
                <FiCreditCard className="size-6 text-emerald-600" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 ">
                Bank Transfer
              </h2>
            </div>

            <div className="space-y-6">
              {/* Account Name */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Account Name
                </label>
                <p className="text-lg font-medium text-gray-900  mt-1">
                  {bankDetails.accountName}
                </p>
              </div>

              {/* Account Number (Copyable) */}
              <div className="relative group">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Account Number
                </label>
                <div className="flex items-center justify-between mt-1 p-3 bg-gray-50  rounded-lg border border-gray-200  group-hover:border-emerald-500 transition-colors">
                  <span className="font-mono text-xl text-gray-900  tracking-widest">
                    {bankDetails.accountNumber}
                  </span>
                  <button
                    onClick={() => handleCopy(bankDetails.accountNumber, "acc")}
                    className="p-2 hover:bg-gray-200  rounded-md transition-colors"
                    title="Copy Account Number"
                  >
                    {copiedField === "acc" ? (
                      <FiCheck className="text-green-500" />
                    ) : (
                      <FiCopy className="text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* IFSC Code (Copyable) */}
              <div className="relative group">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  IFSC Code
                </label>
                <div className="flex items-center justify-between mt-1 p-3 bg-gray-50  rounded-lg border border-gray-200  group-hover:border-emerald-500 transition-colors">
                  <span className="font-mono text-lg text-gray-900 ">
                    {bankDetails.ifsc}
                  </span>
                  <button
                    onClick={() => handleCopy(bankDetails.ifsc, "ifsc")}
                    className="p-2 hover:bg-gray-200  rounded-md transition-colors"
                    title="Copy IFSC"
                  >
                    {copiedField === "ifsc" ? (
                      <FiCheck className="text-green-500" />
                    ) : (
                      <FiCopy className="text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-100 ">
                <span>{bankDetails.bankName}</span>
                <span>{bankDetails.branch}</span>
              </div>
            </div>
          </motion.div>

          {/* --- CARD 2: UPI / QR Code --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden flex flex-col items-center text-center"
          >
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)]"></div>

            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="p-3 bg-white/10 rounded-xl mb-6 backdrop-blur-sm">
                <FiSmartphone className="size-6 text-white" />
              </div>
              <h2 className="font-serif text-2xl font-bold mb-2">
                UPI Payment
              </h2>
              <p className="text-emerald-100 text-sm mb-8">
                Scan to donate via GPay, PhonePe, or Paytm
              </p>

              {/* QR Code Container */}
              <div className="bg-white p-4 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
                {/* ⚠️ Make sure to upload the real QR code to public/images/qr-placeholder.png or update this path */}
                <img
                  src="/images/qrcode.jpg"
                  alt="Donation QR Code"
                  className="w-48 h-48 object-contain"
                />
              </div>

              <p className="text-sm font-mono bg-black/20 px-4 py-2 rounded-lg">
                nahjurrashad@upi
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- Footer Note / Contact --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50  text-amber-700  px-6 py-3 rounded-full text-sm font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Confirm your donation via WhatsApp
          </div>

          <a
            href="https://wa.me/919846902564?text=I%20have%20made%20a%20donation%20to%20NRIC"
            target="_blank"
            rel="noreferrer"
            className="block mt-4 text-gray-500 hover:text-emerald-600  transition-colors text-sm font-semibold flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="size-4" />
            Send Receipt
          </a>
        </motion.div>
      </div>
    </div>
  );
}
