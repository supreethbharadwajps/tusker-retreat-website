"use client";

import { motion } from "motion/react";

const images = [
  { src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop", alt: "Zipline adventure" },
  { src: "https://images.unsplash.com/photo-1505238680356-667803448bb6?w=600&h=400&fit=crop", alt: "Swimming pool" },
  { src: "https://images.unsplash.com/photo-1582651977962-a1c6e8e2a7d9?w=600&h=400&fit=crop", alt: "Bali villa" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", alt: "ATV ride" },
  { src: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=600&h=400&fit=crop", alt: "Rope course" },
  { src: "https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=600&h=400&fit=crop", alt: "Cycling" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", alt: "Convention hall" },
  { src: "https://images.unsplash.com/photo-1530023367847-a68293325f8c?w=600&h=400&fit=crop", alt: "Wedding stage" },
];

export default function Gallery() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-center text-brand-green mb-10"
        >
          Experience Tusker Retreat
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-lg aspect-[3/2]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}