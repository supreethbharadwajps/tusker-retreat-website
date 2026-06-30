"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Cable,
  Bike,
  Sliders,
  Car,
  Waves,
  CloudRain,
  Sun,
  Footprints,
  Dumbbell,
  Star as StarIcon,
  Gamepad2,
  Sparkles,
  CarFront,
  UtensilsCrossed,
  Wifi,
  ShieldCheck,
  CheckCircle,
  Zap,
  ChevronRight,
  Phone,
  MessageCircle,
  Trees,
  Users,
  Building2,
  MapPin,
} from "lucide-react";
import HeroForm from "./HeroForm";
import Gallery from "./Gallery";

// ---------- Activities (all unique icons) ----------
const activities = [
  { name: "Zipline", icon: Cable, desc: "Soar over treetops" },
  { name: "Sky Cycling", icon: Bike, desc: "Pedal through the sky" },
  { name: "Burma Bridge", icon: Sliders, desc: "Balance challenge" },
  { name: "ATV Ride", icon: Car, desc: "Off‑road thrill" },
  { name: "Swimming Pool", icon: Waves, desc: "Relax & refresh" },
  { name: "Rain Dance", icon: CloudRain, desc: "Dance in showers" },
  { name: "Cycling", icon: Sun, desc: "Explore trails" },
  { name: "Horse Ride", icon: Footprints, desc: "Gentle rides" },
  { name: "Rope Courses", icon: Sparkles, desc: "High challenge" },
  { name: "Pickle Ball", icon: Dumbbell, desc: "Fast fun" },
  { name: "Badminton", icon: StarIcon, desc: "Court play" },
  { name: "Box Cricket", icon: Gamepad2, desc: "Indoor action" },
];

// ---------- Amenities (unique icons) ----------
const amenities = [
  { name: "Ample Parking", icon: CarFront },
  { name: "Multi‑cuisine Dining", icon: UtensilsCrossed },
  { name: "Free Wi‑Fi", icon: Wifi },
  { name: "24/7 Security", icon: ShieldCheck },
  { name: "Clean Restrooms", icon: CheckCircle },
  { name: "Power Backup", icon: Zap },
];

// ---------- Testimonials ----------
const testimonials = [
  { name: "Ananya Sharma", text: "The private pool villa was dreamy. Zip line and sky cycling were so thrilling. Can't wait to return!", rating: 5 },
  { name: "Rohan Mehta", text: "We hosted our team offsite here—great facilities, delicious food, and excellent coordination.", rating: 5 },
  { name: "Priya & Karthik", text: "Our wedding was magical. The outdoor stage, the villas, everything was beyond expectations.", rating: 5 },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
      />
    ))}
  </div>
);

export default function HomePageClient() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <>
      {/* ========== Hero – Tropical Dark ========== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#0F1A0C" }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1400&q=80')",
            y: heroY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white drop-shadow-lg leading-tight">
              Escape to <span className="text-brand-gold">Paradise</span>
              <br />
              Tusker Retreat
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-lg font-medium">
              36 acres of tropical bliss near Bidadi. Bali villas, 20+ adventures,
              and celebrations — just 30 minutes from Bangalore.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HeroForm variant="hero" />
          </motion.div>
        </div>
      </section>

      {/* ========== Why Tusker Retreat – Soft Green Tint ========== */}
      <section className="py-24 bg-gradient-to-b from-[#FDFBF7] to-[#F4F7F2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-green mb-10"
          >
            Why Tusker Retreat?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-16"
          >
            Tusker Retreat is the premier adventure resort near Bangalore, set on a sprawling 36‑acre estate along the Mysuru‑Bengaluru Expressway. Whether you’re planning a day outing, a family getaway, a corporate team building, or a dream wedding, our resort offers unmatched experiences with 20+ activities, luxury Bali villas, and world‑class amenities.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Trees, title: "36 Acres of Greenery", desc: "Lush landscapes, fresh air, and exotic views — the perfect escape from city life." },
              { icon: Users, title: "Celebrations for 500+", desc: "Our convention hall and outdoor stage host weddings, corporates, and grand parties." },
              { icon: Building2, title: "Bali‑Style Villas", desc: "6 private pool/jacuzzi villas designed for romance and relaxation." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow text-center border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 text-brand-green mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Day Outing – White with subtle shadow divider ========== */}
      <section className="py-24 bg-white relative">
        {/* subtle top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green/30 via-brand-gold/40 to-brand-green/30" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop"
                alt="Day outing"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-green">
              Day Outing Near Bangalore
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Escape the city for a day packed with thrill and relaxation. Zipline, rope courses, rain dance, swimming pool, and more.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> 20+ adventure activities
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> Buffet lunch, hi‑tea, welcome drink
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> Dedicated event coordinator
              </li>
            </ul>
            <a
              href="/dayouting"
              className="inline-flex items-center gap-2 mt-8 bg-brand-green text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors"
            >
              Book Day Outing <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== Stay – Warm Cream Background ========== */}
      <section className="py-24 bg-[#FDF8F0] relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-green">
              Private Pool & Jacuzzi Bali Villas
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Wake up to your own plunge pool. Our Bali‑inspired villas blend luxury, privacy, and nature.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> 6 private pool/jacuzzi villas
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> 20+ deluxe rooms
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> Exotic views & luxury amenities
              </li>
            </ul>
            <a
              href="/stay"
              className="inline-flex items-center gap-2 mt-8 bg-brand-gold text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors"
            >
              View Villas & Rooms <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop"
                alt="Private pool villa"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== Team Outing – Soft Mint Tint ========== */}
      <section className="py-24 bg-gradient-to-r from-[#F4FAF5] to-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
                alt="Team outing"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-green">
              Team Outing & Corporate Events
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Strengthen bonds with thrilling group activities. Perfect for team building, strategy meets, and celebrations.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> Customised team‑building packages
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> Convention hall & meeting spaces
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> Gourmet dining & hi‑tea
              </li>
            </ul>
            <a
              href="/team-outing"
              className="inline-flex items-center gap-2 mt-8 bg-brand-green text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors"
            >
              Plan Team Outing <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== Weddings – Soft Rose/Gold Background ========== */}
      <section className="py-24 bg-[#FDF8F0]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-green">
              Dream Wedding Venue
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Say "I do" surrounded by nature. Outdoor stage, elegant hall, and luxury villas for the bridal party.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> Convention hall for 500 guests
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> Stunning outdoor stage
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-gold w-5 h-5 mt-0.5" /> Bespoke decor & catering
              </li>
            </ul>
            <a
              href="/wedding-venue"
              className="inline-flex items-center gap-2 mt-8 bg-brand-gold text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors"
            >
              Explore Weddings <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop"
                alt="Wedding venue"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== Activities Grid – Soft neutral background ========== */}
      <section className="py-24 bg-[#F9F9F5]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-green mb-20"
          >
            20+ Adventure Activities
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {activities.map((act, i) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={act.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -5, boxShadow: "0 25px 30px -5px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-green/10 text-brand-green mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{act.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{act.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== Amenities – Same soft neutral background ========== */}
      <section className="py-24 bg-[#F4F7F2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-green mb-20"
          >
            Resort Amenities
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-3 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== Testimonials – Tinted background with card shadows ========== */}
      <section className="py-24 bg-[#FDF8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-center text-brand-green mb-16"
          >
            What Our Guests Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <StarRating rating={t.rating} />
                <p className="mt-4 text-gray-600 italic leading-relaxed">“{t.text}”</p>
                <p className="mt-4 font-semibold text-gray-800">- {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Gallery ========== */}
      <Gallery />

      {/* ========== Final CTA ========== */}
      <section className="py-24 bg-brand-green text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Ready for Your Perfect Escape?
          </h2>
          <p className="mt-6 text-xl text-green-100 max-w-2xl mx-auto">
            Limited slots for weekends and holidays. Enquire now for best rates.
          </p>
          <a
            href="/contact"
            className="inline-block mt-8 bg-white text-brand-green font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </motion.div>
      </section>

      {/* ========== Mobile Floating Buttons ========== */}
      <div className="lg:hidden fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="tel:+918971117015"
          className="w-14 h-14 bg-brand-green text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/918971117015?text=Hi%20Tusker%20Retreat%2C%20I%20would%20like%20to%20enquire"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}