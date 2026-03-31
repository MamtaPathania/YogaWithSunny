import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Menu, X, Star, Phone, ArrowRight, MessageCircle, Mail, CheckCircle2, Check } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import './index.css';

// Components
const YogaIcon = ({ className = "" }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-600">
      <circle cx="12" cy="5" r="2.5" fill="currentColor" />
      <path d="M12 8C9.5 8 7.5 10 7.5 12.5V16L4 19C4 19 4 21 12 21C20 21 20 19 20 19L16.5 16V12.5C16.5 10 14.5 8 12 8Z" fill="currentColor" />
      <path d="M8 21C8 21 9 18 12 18C15 18 16 21 16 21" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-yoga-50'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <YogaIcon className="group-hover:scale-110 transition-transform duration-300 shadow-sm p-1.5 rounded-2xl bg-emerald-50" />
          <span className="text-2xl font-serif font-bold text-yoga-900 tracking-tight">Yoga With <span className="text-emerald-600">Sunny</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-yoga-800 hover:text-yoga-500 font-medium transition-colors">Home</a>
          <a href="#about" className="text-yoga-800 hover:text-yoga-500 font-medium transition-colors">About</a>
          <a href="#gallery" className="text-yoga-800 hover:text-yoga-500 font-medium transition-colors">Gallery</a>
          <a href="#contact" className="text-yoga-800 hover:text-yoga-500 font-medium transition-colors">Contact</a>
          <a
            href="https://wa.me/918219112837?text=Hi%2C%20how%20can%20I%20help%20you%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Phone size={18} />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-yoga-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-yoga-100 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
        >
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-yoga-900 text-lg py-2 border-b border-yoga-100 font-medium">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-yoga-900 text-lg py-2 border-b border-yoga-100 font-medium">About</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-yoga-900 text-lg py-2 border-b border-yoga-100 font-medium">Gallery</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-yoga-900 text-lg py-2 border-b border-yoga-100 font-medium">Contact</a>
          <a
            href="https://wa.me/918219112837?text=Hi%2C%20how%20can%20I%20help%20you%3F"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-medium mt-2 shadow-md"
          >
            <Phone size={20} />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
};



const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [
    "/src/assets/images/hero.png",
    "/src/assets/images/yoga-group.png",
    "/src/assets/images/yoga-pose.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yoga-200/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-yoga-300/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-yoga-600 font-medium text-sm mb-6 shadow-sm border border-white/40">
            🌿 Welcome to Yoga With Sunny.
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-yoga-950 leading-tight">
            Transform Your Body, Mind & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yoga-500 to-yoga-700 font-serif italic">Life Through Yoga</span>
          </h1>
          <p className="text-lg text-yoga-800 mb-8 leading-relaxed max-w-xl">
            Welcome to Yoga With Sunny. I am Sunny Singh, a certified yoga instructor with over 10 years of experience. We provide classes for all age groups to improve strength, flexibility, and overall health.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Online Yoga Classes",
              "Personal Yoga Training",
              "Prenatal Yoga",
              "Therapy Yoga",
              "Weight Loss Yoga",
              "Meditation & Pranayama"
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-center gap-3 text-yoga-800 font-medium"
              >
                <div className="bg-yoga-100 text-yoga-600 p-1 rounded-full">
                  <CheckCircle2 size={18} />
                </div>
                <span>{service}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-yoga-600 font-medium mb-8">Start your yoga journey today with Yoga With Sunny.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="bg-yoga-600 hover:bg-yoga-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-yoga-500/30 flex items-center gap-2 group transform hover:-translate-y-1">
              Learn More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative aspect-[4/5] lg:aspect-square">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-yoga-900/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={carouselImages[currentImageIndex]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  alt="Yoga practice"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Floating Elements - NOW OUTSIDE overflow-hidden container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 lg:-left-12 glass-card p-5 flex items-center gap-4 z-20 shadow-xl border border-white/50 min-w-[160px]"
            >
              <div className="bg-orange-100 p-3 rounded-2xl text-orange-500">
                <Star size={24} fill="currentColor" />
              </div>
              <div className="pr-2">
                <p className="font-bold text-yoga-950 text-xl leading-none">4.9/5</p>
                <p className="text-xs text-yoga-700 mt-1 font-medium whitespace-nowrap">Premium Rating</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 lg:-right-12 glass-card p-5 flex items-center gap-5 z-20 shadow-xl border border-white/50 min-w-[180px]"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-yoga-200 overflow-hidden shadow-sm">
                    <img src={`/src/assets/images/student-${i % 2 + 1}.png`} alt="Student" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="pr-2">
                <p className="font-bold text-yoga-950 text-xl leading-none">1k+</p>
                <p className="text-xs text-yoga-700 mt-1 font-medium whitespace-nowrap">Happy Yogis</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-yoga-200 rounded-[3rem] transform -rotate-3 scale-105 -z-10 origin-bottom-left transition-transform hover:rotate-0" />
          <img
            src="/src/assets/images/about.png"
            alt="Yoga instructor meditating"
            className="w-full rounded-[3rem] shadow-xl object-cover aspect-[4/5] object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-yoga-500 font-semibold tracking-wide uppercase text-sm mb-3">About The Instructor</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-yoga-950 mb-6">Expert guidance for a healthier lifestyle.</h3>
          <p className="text-yoga-700 text-lg mb-6 leading-relaxed">
            Yoga With Sunny is dedicated to improving physical health, mental peace, and overall lifestyle through traditional and therapeutic yoga.
          </p>
          <p className="text-yoga-700 text-lg mb-8 leading-relaxed">
            Founded by Sunny Singh, a certified instructor with over 10 years of experience, we provide safe and effective personalized training for all age groups.
          </p>

          <div className="space-y-4 mb-8">
            <h4 className="font-bold text-yoga-900 mb-3 uppercase text-xs tracking-widest">We Specialize In:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {[
                "Traditional Yoga",
                "Prenatal Yoga",
                "Therapy Yoga",
                "Weight Loss Yoga"
              ].map((specialty, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yoga-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                  <span className="text-yoga-800 font-medium">{specialty}</span>
                </div>
              ))}
            </div>
          </div>


          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-yoga-400 pl-4">
              <h4 className="font-bold text-2xl text-yoga-900">10+</h4>
              <p className="text-yoga-600">Years Experience</p>
            </div>
            <div className="border-l-4 border-yoga-400 pl-4">
              <h4 className="font-bold text-2xl text-yoga-900">500+</h4>
              <p className="text-yoga-600">Hours Certified</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};



const GallerySection = () => {
  const images = [
    { src: "/src/assets/images/yoga-group.png", title: "Online Group Sessions", category: "Community" },
    { src: "/src/assets/images/yoga-pose.png", title: "Personal Training", category: "Focus" },
    { src: "/src/assets/images/yoga-prenatal.png", title: "Prenatal Yoga", category: "Wellness" },
    { src: "/src/assets/images/yoga-therapy.png", title: "Therapy Yoga", category: "Healing" }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-yoga-500 font-semibold tracking-wide uppercase text-sm mb-3">Our Sanctuary</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-yoga-950 mb-4">Experience the transformation</h3>
          <p className="text-yoga-700 max-w-2xl mx-auto">
            A glimpse into our serene practices and the journey towards mindfulness. Join us and start your own story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-lg shadow-yoga-900/5"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yoga-950/80 via-yoga-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-yoga-300 text-xs font-bold uppercase tracking-wider mb-2">{image.category}</p>
                <h4 className="text-white text-xl font-bold">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
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

const Footer = () => {
  return (
    <footer className="bg-white border-t border-yoga-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#" className="flex items-center gap-3">
            <YogaIcon className="shadow-sm p-1.5 rounded-2xl bg-emerald-50" />
            <span className="text-xl font-serif font-bold text-yoga-900 tracking-tight">Yoga With <span className="text-emerald-600">Sunny</span></span>
          </a>
          <p className="text-yoga-600 text-sm text-center md:text-left max-w-sm">
            Helping you find peace, balance, and strength through mindful movement and breath.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-4 text-center md:text-right">
          <div className="flex gap-4 mb-2">
            <a href="#home" className="text-yoga-700 hover:text-yoga-500 transition-colors font-medium text-sm">Home</a>
            <a href="#about" className="text-yoga-700 hover:text-yoga-500 transition-colors font-medium text-sm">About</a>
            <a href="#contact" className="text-yoga-700 hover:text-yoga-500 transition-colors font-medium text-sm">Contact</a>
          </div>
          <p className="text-yoga-500/70 text-xs">
            © {new Date().getFullYear()} Yoga With Sunny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-yoga-200 selection:text-yoga-900 text-left">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
