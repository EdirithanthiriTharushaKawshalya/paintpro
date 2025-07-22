"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Truck, HeadphonesIcon, Leaf } from "lucide-react"
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

export default function HomePage() {
  const router = useRouter()
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <motion.div className="max-w-4xl mx-auto" initial="initial" animate="animate" variants={staggerContainer}>
          <motion.h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" variants={fadeInUp}>
            PREMIUM PAINTS & ACCESSORIES
          </motion.h1>
          <motion.p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" variants={fadeInUp}>
            Transform your space with our high-quality paints, professional tools, and expert guidance. From interior
            elegance to exterior durability.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full"
              onClick={() => router.push("/products")}
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-full bg-transparent"
              onClick={() => router.push("/products")}
            >
              Browse Categories
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Interior Paints",
                  description: "Premium interior paints for walls, ceilings, and decorative finishes",
                  buttonText: "Explore Interior Paints",
                  gradient: "from-purple-400 to-purple-600",
                  category: "Interior Paint",
                },
                {
                  title: "Exterior Paints",
                  description: "Weather-resistant paints for outdoor surfaces and facades",
                  buttonText: "Explore Exterior Paints",
                  gradient: "from-blue-400 to-purple-500",
                  category: "Exterior Paint",
                },
                {
                  title: "Tools & Accessories",
                  description: "Professional brushes, rollers, and painting equipment",
                  buttonText: "Explore Tools",
                  gradient: "from-green-400 to-purple-500",
                  category: "Tools",
                },
              ].map((category, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer backdrop-blur-sm bg-white/90 border-0 shadow-lg"
                    onClick={() => router.push(`/products?category=${encodeURIComponent(category.category)}`)}
                  >
                    <div className={`h-48 bg-gradient-to-br ${category.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>
                      <Button
                        variant="outline"
                        className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full bg-transparent"
                      >
                        {category.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose US?</h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "Premium Quality",
                  description: "Only the finest paints from trusted manufacturers with proven durability",
                },
                {
                  icon: Truck,
                  title: "Fast Delivery",
                  description: "Quick and reliable delivery to your doorstep across the island",
                },
                {
                  icon: HeadphonesIcon,
                  title: "Expert Support",
                  description: "Professional guidance and color consultation for perfect results",
                },
                {
                  icon: Leaf,
                  title: "Eco-Friendly",
                  description: "Environment-friendly paints with low VOC and sustainable practices",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/80 border-0 shadow-md">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
