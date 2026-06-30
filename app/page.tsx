import HeroForm from "@/components/HeroForm";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import { motion } from "motion/react"; // but this is server component, so we create a client wrapper
// We'll create a client wrapper for motion components

// Since page is server by default, we need client component for motion.
// I'll create a separate client component "HomePageClient" and import it.
// Let's keep page.tsx server and import a client component.

import HomePageClient from "@/components/HomePageClient";

export const metadata = {
  title: "Tusker Retreat - Adventure Resort Near Bangalore | Day Outing, Stay, Wedding",
  description:
    "20+ adventure activities, Bali villas with private pool, convention hall & wedding venue near Bidadi. 30 mins from Bangalore. Book now!",
};

export default function Home() {
  return <HomePageClient />;
}