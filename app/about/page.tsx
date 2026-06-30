import AboutClient from "@/components/AboutClient";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Tusker Retreat, a 36-acre adventure resort near Bangalore with Bali villas, convention hall, and 20+ activities.",
};
export default function AboutPage() {
  return <AboutClient />;
}