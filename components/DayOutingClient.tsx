"use client";
import { motion } from "motion/react";
import HeroForm from "./HeroForm";

export default function DayOutingClient() {
  return (
    <>
      <section className="relative bg-cover bg-center min-h-[70vh] flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Day Outing Near Bangalore</h1>
            <p className="mt-4 text-gray-200 text-lg">Escape the city for a day of adventure. 20+ activities, swimming pool, rain dance, and sumptuous meals.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <HeroForm variant="hero" />
          </motion.div>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-heading font-bold text-brand-green text-center mb-8">Day Outing Package Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="font-semibold text-xl mb-3">Activities Included</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Zipline, Sky Cycling, Burma Bridge, Commando Rope</li>
                <li>ATV Bike Ride (extra charge)</li>
                <li>Rain Dance & Swimming Pool</li>
                <li>Cycling, Horse Ride (extra charge)</li>
                <li>Pickle Ball, Badminton, Box Cricket/Football, Human Foosball</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-3">Food & Amenities</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Welcome drink, buffet lunch, evening tea</li>
                <li>Ample parking, clean restrooms</li>
                <li>Dedicated event coordinator</li>
                <li>Custom packages available</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}