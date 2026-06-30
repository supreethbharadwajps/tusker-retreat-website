"use client";
import { motion } from "motion/react";
import HeroForm from "./HeroForm";

export default function StayClient() {
  return (
    <>
      <section className="relative bg-cover bg-center min-h-[70vh] flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Stay at Tusker Retreat</h1>
            <p className="mt-4 text-gray-200 text-lg">6 private pool/jacuzzi Bali villas and 20 deluxe rooms for a luxurious escape.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <HeroForm variant="hero" />
          </motion.div>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-heading font-bold text-brand-green mb-4">Luxury Bali Villas & Rooms</h2>
            <p className="text-gray-700">Each villa features a private pool or jacuzzi, elegant interiors, and an exotic view. Rooms are spacious and well-appointed for families and groups.</p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>6 Private Pool/Jacuzzi Villas</li>
              <li>20 Deluxe Rooms</li>
              <li>Convention Hall (500 pax)</li>
              <li>Wedding Stage & Outdoor Venue</li>
            </ul>
          </motion.div>
          <motion.img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop" alt="Room" className="rounded-xl shadow-lg" />
        </div>
      </section>
    </>
  );
}