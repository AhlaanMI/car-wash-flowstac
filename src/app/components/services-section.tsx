import { motion } from "motion/react";
import { Sparkles, Droplets, Armchair, Shield } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    title: "Exterior Wash",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1694678505383-676d78ea3b96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBzb2FwJTIwYnViYmxlc3xlbnwxfHx8fDE3NjgwNjMwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Thorough hand wash & wax",
    benefits: [
      "Premium foam wash",
      "Hand wax application",
      "Tire shine & wheel cleaning"
    ],
    price: "2,500",
  },
  {
    title: "Interior Detailing",
    icon: Armchair,
    image: "https://images.unsplash.com/photo-1656077885491-3922185f3932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2ODA2MzA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Deep clean seats, dashboard & upholstery",
    benefits: [
      "Vacuum & steam cleaning",
      "Leather conditioning",
      "Dashboard & console detailing"
    ],
    price: "3,500",
  },
  {
    title: "Full Polish & Ceramic Coating",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1653684345773-20a718636130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3YXNoJTIwc2hpbmluZ3xlbnwxfHx8fDE3NjgwNjMwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Long-lasting protection & showroom gloss",
    benefits: [
      "Paint correction & buffing",
      "Ceramic coating application",
      "UV & scratch protection"
    ],
    price: "8,500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Our Top Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                        <Sparkles className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span style={{ fontFamily: 'Inter, sans-serif' }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        QAR {service.price}
                      </p>
                    </div>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Select
                    </Button>
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
