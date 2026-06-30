"use client";
import { motion } from "motion/react";
import ContactForm from "./ContactForm";

export default function ContactClient() {
  return (
    <>
      <section className="relative bg-cover bg-center min-h-[50vh] flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold">Contact Us</motion.h1>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        <ContactForm />
      </section>
    </>
  );
}