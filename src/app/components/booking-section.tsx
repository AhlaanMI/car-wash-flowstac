import { motion } from "motion/react";
import { Calendar, Phone, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/97477123456?text=Hi, I would like to book a car wash service', '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Shine? Book Today!
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Choose your preferred booking method
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Booking Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Book Online
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 mb-2 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Your Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 mb-2 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+974 XXXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-gray-700 mb-2 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Service Type
                </Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Package - QAR 1,500</SelectItem>
                    <SelectItem value="premium">Premium Package - QAR 3,000</SelectItem>
                    <SelectItem value="ultimate">Ultimate Package - QAR 5,000</SelectItem>
                    <SelectItem value="exterior">Exterior Wash - QAR 2,500</SelectItem>
                    <SelectItem value="interior">Interior Detailing - QAR 3,500</SelectItem>
                    <SelectItem value="polish">Full Polish & Ceramic - QAR 8,500</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date" className="text-gray-700 mb-2 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="time" className="text-gray-700 mb-2 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
                >
                  <p className="font-semibold">Booking Confirmed!</p>
                  <p className="text-sm">We'll contact you shortly to confirm your appointment.</p>
                </motion.div>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold shadow-lg"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Book Now
              </Button>
            </form>
          </motion.div>

          {/* WhatsApp Quick Book */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Quick WhatsApp Booking
                </h3>
              </div>
              <p className="text-blue-100 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Prefer to book via WhatsApp? Send us a quick message and we'll get back to you instantly!
              </p>
              <Button
                onClick={handleWhatsApp}
                className="w-full h-14 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold shadow-lg"
              >
                <MessageCircle className="mr-2 w-6 h-6" />
                WhatsApp Quick Book
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Call Us Directly
                </h3>
              </div>
              <div className="space-y-3">
                <a href="tel:+97477123456" className="block">
                  <div className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors">
                    <p className="text-sm text-blue-100 mb-1">Phone</p>
                    <p className="text-xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      +974 77 123 4567
                    </p>
                  </div>
                </a>
                <a href="mailto:info@goldenspark.qa" className="block">
                  <div className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors">
                    <p className="text-sm text-blue-100 mb-1">Email</p>
                    <p className="text-lg font-semibold text-white">
                      info@goldenspark.qa
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
