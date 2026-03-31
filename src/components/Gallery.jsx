import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
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

export default Gallery;
