import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";

const pricingTiers = [
  {
    name: "Basic",
    price: "1,500",
    popular: false,
    features: [
      "Exterior hand wash",
      "Wheel & tire cleaning",
      "Window cleaning",
      "Basic interior vacuum",
      "Air freshener",
    ],
  },
  {
    name: "Premium",
    price: "3,000",
    popular: true,
    features: [
      "Everything in Basic",
      "Hand wax application",
      "Deep interior cleaning",
      "Dashboard & console detail",
      "Leather conditioning",
      "Engine bay cleaning",
      "Tire shine",
    ],
  },
  {
    name: "Ultimate",
    price: "5,000",
    popular: false,
    features: [
      "Everything in Premium",
      "Paint correction",
      "Ceramic coating",
      "Headlight restoration",
      "Carpet shampooing",
      "UV protection",
      "Complete detailing",
      "6-month protection warranty",
    ],
  },
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Affordable Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Choose the perfect package for your car's needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {/* Most Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold text-sm flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 ${
                  tier.popular
                    ? 'border-blue-500 shadow-blue-200'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {/* Header */}
                <div
                  className={`p-8 text-center ${
                    tier.popular
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700'
                      : 'bg-gradient-to-br from-gray-50 to-gray-100'
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      tier.popular ? 'text-white' : 'text-gray-900'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span
                      className={`text-5xl font-bold ${
                        tier.popular ? 'text-white' : 'text-gray-900'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-xl ${
                        tier.popular ? 'text-blue-100' : 'text-gray-600'
                      }`}
                    >
                      QAR
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                            tier.popular
                              ? 'bg-blue-100'
                              : 'bg-gray-100'
                          }`}
                        >
                          <Check
                            className={`w-4 h-4 ${
                              tier.popular ? 'text-blue-600' : 'text-gray-600'
                            }`}
                          />
                        </div>
                        <span
                          className="text-gray-700 flex-1"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-6 text-lg font-semibold ${
                      tier.popular
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-500/50'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
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
