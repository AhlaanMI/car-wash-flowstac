import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                GOLDEN SPARK
              </span>
            </div>
            <p
              className="text-gray-400 mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Premium car wash and detailing services in Doha, Qatar. Making
              your car shine like new since 2020.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Quick Links
            </h3>
            <ul
              className="space-y-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Services
            </h3>
            <ul
              className="space-y-3 text-gray-400"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <li>Exterior Wash & Wax</li>
              <li>Interior Detailing</li>
              <li>Ceramic Coating</li>
              <li>Paint Correction</li>
              <li>Engine Cleaning</li>
              <li>Headlight Restoration</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+97477123456"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    +974 77 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:info@goldenspark.qa"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    info@goldenspark.qa
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">
                    شارع الصفصاف
                    <br />
                    Doha, Qatar
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-gray-800 bg-gray-800/70">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
            <div className="p-6 md:p-8 flex flex-col gap-4 justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 text-blue-200 text-sm font-semibold w-fit">
                <MapPin className="w-4 h-4" />
                Find us
              </div>
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Golden Spark Car Wash & Polish
              </h3>
              <p
                className="text-gray-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Tap below to open live directions in Google Maps.
              </p>
              <a
                href="https://maps.app.goo.gl/Nn1yvhs67TVtH9WT8"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 w-fit rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 transition-colors"
              >
                Open in Google Maps
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>

            <div className="h-[320px] lg:h-full bg-gray-900">
              <iframe
                title="Golden Spark Car Wash location"
                src="https://www.google.com/maps?q=Golden%20Spark%20Car%20Wash%20%26%20Polish%20Qatar&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              © 2026 Golden Spark Car Wash & Polish. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
