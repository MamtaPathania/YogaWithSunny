import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Mail, ArrowRight, Check } from 'lucide-react';

const Contact = () => {
  const [showCopiedToast, setShowCopiedToast] = useState(false);
  const phoneNumber = "+91 82191 12837";

  const handleCallClick = (e, method) => {
    if (method.title === "Call Us") {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;

      if (isMobile) {
        // Mobile behavior: dial
        window.location.href = method.action;
      } else {
        // Desktop behavior: copy
        e.preventDefault();
        navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ''));
        setShowCopiedToast(true);
        setTimeout(() => setShowCopiedToast(false), 3000);
      }
    }
  };

  const contactMethods = [
    {
      icon: <Phone size={28} />,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm.",
      action: "tel:+918219112837",
      cta: "Call Now",
      color: "bg-blue-50 text-blue-600",
      hover: "hover:bg-blue-100"
    },
    {
      icon: <MessageCircle size={28} />,
      title: "WhatsApp",
      description: "Chat with YogaWithSunny anytime.",
      action: "https://wa.me/918219112837?text=Hi%2C%20how%20can%20I%20help%20you%3F",
      cta: "Message YogaWithSunny",
      color: "bg-green-50 text-green-600",
      hover: "hover:bg-green-100"
    },
    {
      icon: <Mail size={28} />,
      title: "Email Us",
      description: "We'll respond within 24 hours.",
      action: "https://mail.google.com/mail/?view=cm&fs=1&to=yogaclassesbysunny@gmail.com",
      cta: "Send Email",
      color: "bg-purple-50 text-purple-600",
      hover: "hover:bg-purple-100"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-yoga-50 relative overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {showCopiedToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-yoga-950 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10"
          >
            <div className="bg-yoga-500 p-1 rounded-full">
              <Check size={16} />
            </div>
            <span className="font-medium">Phone number copied!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-yoga-500 font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-yoga-950 mb-4">We'd love to hear from you</h3>
          <p className="text-yoga-700 max-w-2xl mx-auto">
            Have questions about our classes or want to start your yoga journey? Our team is always here to help you find your path.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? "_blank" : undefined}
              rel={method.action.startsWith('http') ? "noopener noreferrer" : undefined}
              onClick={(e) => handleCallClick(e, method)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-yoga-900/5 hover:shadow-xl transition-all hover:-translate-y-2 group flex flex-col items-center text-center border border-yoga-100"
            >
              <div className={`w-16 h-16 rounded-2xl ${method.color} ${method.hover} flex items-center justify-center mb-6 transition-colors`}>
                {method.icon}
              </div>
              <h4 className="text-xl font-bold text-yoga-950 mb-2">{method.title}</h4>
              <p className="text-yoga-600 mb-6 flex-grow">{method.description}</p>
              <span className="text-yoga-900 font-medium group-hover:text-yoga-500 transition-colors flex items-center gap-2">
                {method.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
