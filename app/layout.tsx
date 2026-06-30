import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tusker Retreat - Adventure Resort Near Bangalore | 30 Mins from Mysuru Expressway",
    template: "%s | Tusker Retreat",
  },
  description:
    "20+ adventure activities, Bali villas with private pool, convention hall, wedding venue, day outings, corporate & team outings near Bidadi, 30 min from Bangalore.",
  keywords: [
    "adventure resort near bangalore",
    "day outing bangalore",
    "team outing near bangalore",
    "corporate outing bangalore",
    "wedding venue near bangalore",
    "family outing near bangalore",
    "tusker retreat",
    "bali villas bangalore",
    "rope course bangalore",
    "atv ride bangalore",
  ],
  openGraph: {
    title: "Tusker Retreat - Adventure Resort Near Bangalore",
    description:
      "20+ adventure activities, private pool villas, convention hall, and more. Just 30 minutes from Bangalore on Mysuru Expressway.",
    type: "website",
    locale: "en_IN",
    siteName: "Tusker Retreat",
  },
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Tusker Retreat",
  description:
    "Luxury adventure resort near Bangalore with Bali villas, 20+ activities, convention hall, and wedding venue. 36 acres of tropical bliss.",
  url: "https://tuskerretreat.in",
  telephone: "+918971117015",
  email: "info@tuskerretreat.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Bidadi, Mysuru-Bengaluru Expressway",
    addressLocality: "Bidadi",
    addressRegion: "Karnataka",
    postalCode: "562109",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.8000",   // Approximate; replace with actual
    longitude: "77.4000",
  },
  image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
  priceRange: "₹1500 - ₹15000",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Swimming Pool" },
    { "@type": "LocationFeatureSpecification", name: "Free Wi‑Fi" },
    { "@type": "LocationFeatureSpecification", name: "Restaurant" },
    { "@type": "LocationFeatureSpecification", name: "Free Parking" },
    { "@type": "LocationFeatureSpecification", name: "Bar" },
    { "@type": "LocationFeatureSpecification", name: "Spa" },
    { "@type": "LocationFeatureSpecification", name: "Fitness Center" },
    { "@type": "LocationFeatureSpecification", name: "Wedding Venue" },
    { "@type": "LocationFeatureSpecification", name: "Business Center" },
    { "@type": "LocationFeatureSpecification", name: "Room Service" },
  ],
  containsPlace: [
    { "@type": "HotelRoom", name: "Private Pool Villa", numberOfRooms: "6" },
    { "@type": "HotelRoom", name: "Deluxe Room", numberOfRooms: "20" },
    { "@type": "MeetingRoom", name: "Convention Hall", capacity: "500" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "120",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </head>
      <body className="font-body bg-white text-gray-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}