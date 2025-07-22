"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Leaf, Users, Shield } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

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

export default function AboutPage() {
  const router = useRouter()
  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Our Story Section */}
        <motion.section className="mb-16" initial="initial" animate="animate" variants={staggerContainer}>
          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <motion.div className="text-center mb-8" variants={fadeInUp}>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">OUR STORY</h1>
              </motion.div>

              <motion.div className="flex justify-center mb-8" variants={fadeInUp}>
                <div className="w-80 h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Our team illustration"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </motion.div>

              <motion.div className="space-y-6 text-gray-700 leading-relaxed" variants={fadeInUp}>
                <p>
                  PaintPro was born from a simple observation: finding high-quality paint in Sri Lanka was unnecessarily
                  complicated. Our founder, Priya Perera, spent years in the construction industry watching customers
                  struggle with limited color options, inconsistent quality, and lack of expert guidance.
                </p>
                <p>
                  In 2018, she decided to change that. Starting with a small store in Colombo, PaintPro set out to
                  revolutionize how Sri Lankans think about paint. We partnered with international brands, trained our
                  team in color theory, and built relationships with customers who trusted us to transform their spaces.
                </p>
                <p>
                  Today, we're proud to be Sri Lanka's premier paint destination, serving thousands of customers who
                  choose us for our quality, expertise, and commitment to their vision.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Our Values Section */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">THE PRINCIPLES THAT GUIDE EVERYTHING WE DO</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                description: "Premium paints from top global brands—lasting beauty & durability.",
                gradient: "from-purple-400 to-purple-600",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                description: "Eco-friendly paints with low-VOC options.",
                gradient: "from-green-400 to-green-600",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Committed to your satisfaction, with expert guidance from start to finish.",
                gradient: "from-blue-400 to-blue-600",
              },
              {
                icon: Shield,
                title: "Trusted Service",
                description: "Sri Lanka's most trusted name, known for reliability and outstanding service.",
                gradient: "from-orange-400 to-orange-600",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">READY TO TRANSFORM YOUR SPACE?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have trusted PaintPro to bring their vision to life. Let's
                create something beautiful together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full"
                  onClick={() => router.push("/colors")}
                >
                  Explore Colors
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-full bg-transparent"
                  onClick={() => router.push("/support")}
                >
                  Get Expert Advice
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
