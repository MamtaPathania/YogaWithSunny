import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [
    "/assets/images/hero.png",
    "/assets/images/yoga-group.png",
    "/assets/images/yoga-pose.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden min-h-screen flex items-center">
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
              <button
                onClick={() => scrollToSection('about')}
                className="bg-yoga-600 hover:bg-yoga-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-yoga-500/30 flex items-center gap-2 group transform hover:-translate-y-1"
              >
                Learn More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
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

              {/* Floating Elements */}
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
                      <img src={`/assets/images/student-${i % 2 + 1}.png`} alt="Student" className="w-full h-full object-cover" />
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

      {/* Other Sections */}
      <About />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
