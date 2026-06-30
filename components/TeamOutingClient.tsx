"use client";
import { motion } from "motion/react";
import HeroForm from "./HeroForm";

export default function TeamOutingClient() {
  return (
    <>
      <section className="relative bg-cover bg-center min-h-[70vh] flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Team Outing Near Bangalore</h1>
            <p className="mt-4 text-gray-200 text-lg">Strengthen bonds with thrilling group activities and fun challenges.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <HeroForm variant="hero" />
          </motion.div>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4 text-center text-gray-700">
        <h2 className="text-3xl font-heading font-bold text-brand-green mb-8">Team Building Activities</h2>
        <p>Zipline, Burma Bridge, Commando Rope, Human Foosball, and more – designed to promote teamwork and leadership.</p>
      </section>
    </>
  );
}