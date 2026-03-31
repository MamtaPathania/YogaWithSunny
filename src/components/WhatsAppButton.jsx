import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/918219112837?text=Hi%2C%20how%20can%20I%20help%20you%3F";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[99] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/40 transition-shadow flex items-center justify-center group border-2 border-white/20"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#25D366] rounded-full -z-10 opacity-40 group-hover:opacity-0 transition-opacity"
      />
      
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 transition-all duration-300 font-medium whitespace-nowrap hidden md:inline-block">
        Chat with Us
      </span>
      <MessageCircle size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;
