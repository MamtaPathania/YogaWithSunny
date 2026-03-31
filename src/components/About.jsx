import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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

export default About;
