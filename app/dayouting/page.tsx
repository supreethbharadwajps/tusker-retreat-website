import DayOutingClient from "@/components/DayOutingClient";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Day Outing Near Bangalore - Adventure & Fun | Tusker Retreat",
  description: "Best day outing package near Bangalore with 20+ adventure activities, pool, rain dance, and delicious food. Just 30 min away.",
};
export default function DayOutingPage() {
  return <DayOutingClient />;
}