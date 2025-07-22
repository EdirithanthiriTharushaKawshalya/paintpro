"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function SupportPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically handle the form submission,
    // such as sending the data to an API endpoint.
    // For this example, we'll just log the data.
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="initial" animate="animate" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We Help You?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            OUR EXPERT TEAM IS HERE TO ASSIST YOU WITH ALL YOUR PAINT AND COLOR NEEDS. GET PERSONALIZED SUPPORT FROM OUR
            KNOWLEDGEABLE STAFF.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.section className="mb-12" initial="initial" animate="animate" variants={staggerContainer}>
          <motion.div className="text-center mb-8" variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-gray-600">CHOOSE THE BEST WAY TO REACH OUR SUPPORT TEAM</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Phone,
                title: "Phone Support",
                description: "Speak directly with our paint experts",
                contact: "+94 77 123 4567",
                buttonText: "Contact Now",
                gradient: "from-blue-400 to-blue-600",
                action: () => window.open("tel:+94771234567"),
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Chat",
                description: "Quick responses via WhatsApp",
                contact: "+94 77 123 4567",
                buttonText: "Contact Now",
                gradient: "from-green-400 to-green-600",
                action: () => window.open("https://wa.me/94771234567"),
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Detailed inquiries and support",
                contact: "support@paintpro.lk",
                buttonText: "Contact Now",
                gradient: "from-purple-400 to-purple-600",
                action: () => window.open("mailto:support@paintpro.lk"),
              },
            ].map((method, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center backdrop-blur-sm bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                    <p className="font-semibold text-gray-900 mb-4">{method.contact}</p>
                    <Button
                      className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6"
                      onClick={method.action}
                    >
                      {method.title === "Phone Support" ? "Call Now" : "Contact Now"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Store Location */}
        <motion.section
          className="mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-semibold text-gray-900">Visit Our Store</h3>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900">PaintPro Flagship Store</h4>
                <p className="text-gray-600">123 Paint Street</p>
                <p className="text-gray-600">Colombo 03, Sri Lanka</p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-green-100 to-blue-100 h-64 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">PaintPro Flagship Store Location</p>
                </div>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contact Form */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
            <CardContent className="p-8">
              <motion.div className="mb-6" variants={fadeInUp}>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </motion.div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div className="grid md:grid-cols-2 gap-4" variants={fadeInUp}>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                    <Input
                      className="bg-white/80 border-purple-200 rounded-lg"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                    <Input
                      className="bg-white/80 border-purple-200 rounded-lg"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </motion.div>

                <motion.div className="grid md:grid-cols-2 gap-4" variants={fadeInUp}>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
                    <Input
                      type="email"
                      className="bg-white/80 border-purple-200 rounded-lg"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      className="bg-white/80 border-purple-200 rounded-lg"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
                  <Input
                    className="bg-white/80 border-purple-200 rounded-lg"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                  <Textarea
                    placeholder="Please describe your question or concern in detail..."
                    className="bg-white/80 border-purple-200 rounded-lg min-h-32"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
