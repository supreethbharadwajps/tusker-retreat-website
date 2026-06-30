"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface HeroFormProps {
  variant?: "hero" | "footer";
}

export default function HeroForm({ variant = "hero" }: HeroFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    people: "",
    date: "",
    type: "dayouting",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: variant === "footer" ? "footer" : "hero",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", people: "", date: "", type: "dayouting" });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={
        variant === "hero"
          ? "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl"
          : ""
      }
    >
      {variant === "hero" && (
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold mb-4"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
          <h2 className="text-2xl font-heading font-bold text-white drop-shadow-md">
            Start Your Adventure
          </h2>
          <p className="text-sm text-gray-300 mt-1">
            Fill the form below and we’ll get back to you within 30 minutes.
          </p>
        </div>
      )}

      {variant === "footer" && (
        <h4 className="text-lg font-heading font-semibold text-white mb-4">
          Quick Enquiry
        </h4>
      )}

      {submitted ? (
        <div className="text-center py-4">
          <p className="text-green-400 font-semibold text-lg">
            Thank you! We will get in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className={inputClasses}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className={inputClasses}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="number"
              placeholder="Number of People"
              required
              min="1"
              className={inputClasses}
              value={formData.people}
              onChange={(e) => setFormData({ ...formData, people: e.target.value })}
            />
            <input
              type="date"
              required
              className={inputClasses}
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            <select
              className={inputClasses + " sm:col-span-2"}
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              <option value="dayouting">Day Outing</option>
              <option value="stay">Stay</option>
              <option value="team outing">Team Outing</option>
              <option value="events">Events / Wedding</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-gold hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-xl transition-colors disabled:opacity-70 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95"
          >
            {loading ? "Sending..." : "Get Best Quote"}
          </button>
        </form>
      )}
    </motion.div>
  );
}