"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"

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

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Sunset Glow",
      description: "Warm yellow capturing golden hour light",
      price: "LKR 1,250",
      color: "bg-yellow-500",
      category: "Yellows",
      finish: "Gloss",
      type: "color",
      rating: 4,
    },
    {
      id: 2,
      name: "Eco-Friendly Interior Paint - Sage Green",
      description: "Fresh green inspired by forest canopies",
      price: "LKR 2,900",
      originalPrice: "LKR 3,200",
      color: "bg-green-500",
      category: "Interior Paint",
      type: "product",
      rating: 5,
    },
    {
      id: 3,
      name: "Ocean Breeze",
      description: "A calming blue reminiscent of ocean waves",
      price: "LKR 1,250",
      color: "bg-blue-500",
      category: "Blues",
      finish: "Matte",
      type: "color",
      rating: 4,
    },
    {
      id: 4,
      name: "Rose Blush",
      description: "Gentle pink for romantic atmospheres",
      price: "LKR 2,200",
      color: "bg-pink-300",
      category: "Pinks",
      finish: "Satin",
      type: "color",
      rating: 4,
    },
  ])

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id))
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl pt-16 mx-auto">
        {/* Header */}
        <motion.div className="mb-8" initial="initial" animate="animate" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Heart className="w-8 h-8 text-red-500 fill-current" />
            My Favorites
          </h1>
          <p className="text-gray-600">Your saved colors and products ({favorites.length} items)</p>
        </motion.div>

        {favorites.length === 0 ? (
          <motion.div className="text-center py-16" initial="initial" animate="animate" variants={fadeInUp}>
            <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No favorites yet</h2>
            <p className="text-gray-600 mb-6">Start adding colors and products to your favorites</p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">Browse Colors</Button>
              <Button
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full bg-transparent px-8"
              >
                Browse Products
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {favorites.map((item, index) => (
              <motion.div key={item.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/90 border-0 shadow-lg group">
                  <div className="relative">
                    <div className={`h-48 ${item.color} relative overflow-hidden`}>
                      <Badge className="absolute top-3 left-3 bg-white/90 text-gray-700 hover:bg-white">
                        {item.category}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-50 text-red-600 hover:bg-red-100"
                        onClick={() => removeFavorite(item.id)}
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                        )}
                      </div>
                      {item.finish && (
                        <Badge variant="outline" className="text-xs">
                          {item.finish}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
