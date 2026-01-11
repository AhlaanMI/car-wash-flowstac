import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Service = {
  name: string;
  price: number;
  note?: string;
  highlight?: boolean;
};

const services: Service[] = [
  {
    name: "Car Washing Normal (SUV/Sedan)",
    price: 30,
    note: "Standard wash for SUVs and sedans",
    highlight: true,
  },
  {
    name: "Washing Normal (Pickup)",
    price: 40,
    note: "Full wash for pickup trucks",
  },
  {
    name: "Car Washing Only Water",
    price: 10,
    note: "Quick rinse without shampoo",
  },
  {
    name: "Car Washing Only Water & Shampoo",
    price: 15,
    note: "Rinse with shampoo only",
  },
  { name: "Car Washing Only Outside", price: 25, note: "Exterior-only wash" },
  { name: "Body Polishing", price: 350, note: "Full body polish" },
  { name: "Inside Polishing", price: 350, note: "Interior polish/detail" },
  { name: "Engine Polishing", price: 100 },
  { name: "Wheel Cup Polishing", price: 100 },
  { name: "Remove Small Scratches", price: 50 },
  { name: "Head Lights Polishing", price: 80 },
];

export function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Service Pricing
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Updated to match the latest Golden Spark Car Wash price list (QAR)
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div
                className={`h-full bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 ${
                  service.highlight
                    ? "border-blue-500 shadow-blue-200"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <div
                  className={`p-8 text-center ${
                    service.highlight
                      ? "bg-gradient-to-br from-blue-600 to-blue-700"
                      : "bg-gradient-to-br from-gray-50 to-gray-100"
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      service.highlight ? "text-white" : "text-gray-900"
                    }`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {service.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span
                      className={`text-5xl font-bold ${
                        service.highlight ? "text-white" : "text-gray-900"
                      }`}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {service.price}
                    </span>
                    <span
                      className={`text-xl ${
                        service.highlight ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      QAR
                    </span>
                  </div>

                  {service.note && (
                    <p
                      className={`mt-4 text-sm ${
                        service.highlight ? "text-blue-100" : "text-gray-700"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {service.note}
                    </p>
                  )}
                  {service.highlight && (
                    <div className="mt-4 flex justify-center">
                      <Badge className="bg-white text-blue-700 font-semibold">
                        Popular
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <Button
                    className={`w-full py-6 text-lg font-semibold ${
                      service.highlight
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-500/50"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                    onClick={() =>
                      document
                        .getElementById("booking")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
