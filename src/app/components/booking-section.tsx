import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function BookingSection() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/97470403005?text=Hi, I would like to book a car wash service",
      "_blank"
    );
  };

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Ready to Shine? Book Today!
          </h2>
          <p
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Choose your preferred booking method
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {/* WhatsApp Quick Book */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Quick WhatsApp Booking
              </h3>
            </div>
            <p
              className="text-blue-100 mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Prefer to book via WhatsApp? Send us a quick message and we'll get
              back to you instantly!
            </p>
            <Button
              onClick={handleWhatsApp}
              className="w-full h-14 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold shadow-lg"
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              WhatsApp Quick Book
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Call Us Directly
              </h3>
            </div>
            <div className="space-y-3">
              <a href="tel:+97470403005" className="block">
                <div className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors">
                  <p className="text-sm text-blue-100 mb-1">Phone</p>
                  <p
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    +974 7040 3005
                  </p>
                </div>
              </a>
              {/* <a href="mailto:info@goldenspark.qa" className="block">
                <div className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors">
                  <p className="text-sm text-blue-100 mb-1">Email</p>
                  <p className="text-lg font-semibold text-white">
                    info@goldenspark.qa
                  </p>
                </div>
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
