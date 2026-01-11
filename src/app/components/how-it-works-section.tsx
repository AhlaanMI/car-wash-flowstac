import { motion } from "motion/react";
import { Calendar, Car, Sparkles, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book Online",
    description: "Choose your service and select a convenient time slot through our easy booking system",
    icon: Calendar,
  },
  {
    number: "02",
    title: "We Pick Up",
    description: "Our team picks up your car from your location at the scheduled time",
    icon: Car,
  },
  {
    number: "03",
    title: "Expert Wash & Polish",
    description: "Professional detailing with premium products and experienced technicians",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Deliver Sparkling Clean",
    description: "Your car is returned to you looking showroom fresh and pristine",
    icon: Truck,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
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
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            We make it easy to get your car looking its absolute best
          </p>
        </motion.div>

        {/* Steps - Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200"></div>

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Icon Circle */}
                <motion.div
                  className="relative mx-auto w-40 h-40 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6 shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className="w-16 h-16 text-white" />
                  
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-50">
                    <span className="text-xl font-bold text-blue-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile/Tablet Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex gap-6 items-start">
                {/* Icon Circle */}
                <motion.div
                  className="relative flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                  
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-blue-50">
                    <span className="text-lg font-bold text-blue-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="absolute left-12 top-24 w-0.5 h-8 bg-blue-300"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
