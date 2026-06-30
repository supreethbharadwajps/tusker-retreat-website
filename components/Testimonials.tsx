"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    name: "Ananya Sharma",
    text: "Tusker Retreat is the perfect weekend escape! The zip line and sky cycling were so thrilling. The Bali villa with private pool was a dream.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    text: "Organized our team outing here. 20+ activities kept everyone engaged. The rope courses and ATV ride were a huge hit. Highly recommend!",
    rating: 5,
  },
  {
    name: "Priya & Karthik",
    text: "We had our wedding at Tusker Retreat. The convention hall and outdoor stage were stunning. Our guests loved the experience.",
    rating: 5,
  },
  {
    name: "Vikram Joshi",
    text: "Just 30 minutes from Bangalore, but feels like a different world. The rain dance, pool, and cycling tracks made our family outing unforgettable.",
    rating: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-center text-brand-green mb-10"
        >
          What Our Guests Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow"
            >
              <StarRating rating={t.rating} />
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">"{t.text}"</p>
              <p className="mt-4 font-semibold text-gray-800">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}