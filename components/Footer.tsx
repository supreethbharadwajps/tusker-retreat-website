"use client";

import Link from "next/link";
import HeroForm from "./HeroForm";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-heading font-bold text-white mb-4">
            Tusker Retreat
          </h3>
          <p className="text-sm">
            Adventure resort near Bidadi, just 30 minutes from Bangalore on Mysuru-Bengaluru Expressway.
          </p>
          <p className="mt-3 text-sm">
            info@tuskerretreat.in | +91 89711 17015
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/dayouting">Day Outing</Link></li>
            <li><Link href="/stay">Stay</Link></li>
            <li><Link href="/corporate-outing">Corporate Outing</Link></li>
            <li><Link href="/team-outing">Team Outing</Link></li>
            <li><Link href="/family-outing">Family Outing</Link></li>
            <li><Link href="/wedding-venue">Wedding Venue</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">
            Quick Enquiry
          </h4>
          <HeroForm variant="footer" />
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Tusker Retreat. All rights reserved.
      </div>
    </footer>
  );
}