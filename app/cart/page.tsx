"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from "lucide-react"

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

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wall Paint - Ocean Blue",
      price: 2850,
      quantity: 2,
      image: "bg-blue-500",
      category: "Interior Paint",
    },
    {
      id: 2,
      name: "Professional Brush Set - 5 Pieces",
      price: 1250,
      quantity: 1,
      image: "bg-gray-400",
      category: "Tools",
    },
    {
      id: 3,
      name: "Eco-Friendly Interior Paint - Sage Green",
      price: 2900,
      quantity: 1,
      image: "bg-green-500",
      category: "Interior Paint",
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 500
  const total = subtotal + shipping

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="mb-8 mt-16" initial="initial" animate="animate" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <ShoppingCart className="w-8 h-8 text-purple-600" />
            Shopping Cart
          </h1>
          <p className="text-gray-600">Review your items and proceed to checkout</p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div className="text-center py-16" initial="initial" animate="animate" variants={fadeInUp}>
            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started</p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
              Continue Shopping
            </Button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div className="space-y-4" initial="initial" animate="animate" variants={staggerContainer}>
                {cartItems.map((item, index) => (
                  <motion.div key={item.id} variants={fadeInUp}>
                    <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-20 h-20 ${item.image} rounded-lg flex-shrink-0`} />

                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                            <p className="font-semibold text-purple-600">LKR {item.price.toLocaleString()}</p>
                          </div>

                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-8 h-8 p-0 rounded-full bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>

                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 0)}
                              className="w-16 text-center bg-white/80 border-purple-200"
                              min="0"
                            />

                            <Button
                              variant="outline"
                              size="sm"
                              className="w-8 h-8 p-0 rounded-full bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <p className="font-semibold text-gray-900 mb-2">
                              LKR {(item.price * item.quantity).toLocaleString()}
                            </p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div initial="initial" animate="animate" variants={fadeInUp}>
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                        <span className="font-semibold">LKR {subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-semibold">LKR {shipping.toLocaleString()}</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between">
                          <span className="text-lg font-semibold text-gray-900">Total</span>
                          <span className="text-lg font-semibold text-purple-600">LKR {total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3 mb-4">
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full bg-transparent"
                    >
                      Continue Shopping
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
