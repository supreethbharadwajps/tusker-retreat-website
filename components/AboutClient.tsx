"use client";
import { motion } from "motion/react";
export default function AboutClient() {
  return (
    <>
      <section className="relative bg-cover bg-center min-h-[60vh] flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-white text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold">About Tusker Retreat</motion.h1>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-lg text-gray-700 leading-relaxed">
            Sprawling over 36 acres near Bidadi on the Mysuru-Bengaluru Expressway, Tusker Retreat is your ultimate adventure destination just 30 minutes from Bangalore.
            With 20+ thrilling activities, 6 private pool/jacuzzi Bali villas, 20 deluxe rooms, a convention hall, and a stunning wedding venue, we offer everything for a perfect getaway.
            Whether it’s a day outing, a family gathering, a corporate team building event, or your dream wedding, our team ensures a memorable experience.
          </p>
        </motion.div>
      </section>
    </>
  );
}