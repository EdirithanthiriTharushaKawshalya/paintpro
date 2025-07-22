"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { User, Package, MapPin } from "lucide-react"

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

export default function ProfilePage() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-8" initial="initial" animate="animate" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Profile</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <motion.div className="lg:col-span-1" initial="initial" animate="animate" variants={fadeInUp}>
            <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
                <p className="text-gray-600 mb-4">john.doe@email.com</p>
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Premium Member</Badge>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg mt-6">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Orders</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Favorites</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Member Since</span>
                    <span className="font-semibold">2023</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div className="space-y-6" initial="initial" animate="animate" variants={staggerContainer}>
              {/* Personal Information */}
              <motion.div variants={fadeInUp}>
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <User className="w-5 h-5 text-purple-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                        <Input defaultValue="John" className="bg-white/80 border-purple-200 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                        <Input defaultValue="Doe" className="bg-white/80 border-purple-200 rounded-lg" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
                        <Input defaultValue="john.doe@email.com" className="bg-white/80 border-purple-200 rounded-lg" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
                        <Input defaultValue="+94 77 123 4567" className="bg-white/80 border-purple-200 rounded-lg" />
                      </div>
                    </div>

                    <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                      Update Information
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Address Information */}
              <motion.div variants={fadeInUp}>
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Shipping Address</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Street Address</label>
                        <Input defaultValue="123 Main Street" className="bg-white/80 border-purple-200 rounded-lg" />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">City</label>
                          <Input defaultValue="Colombo" className="bg-white/80 border-purple-200 rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Postal Code</label>
                          <Input defaultValue="00100" className="bg-white/80 border-purple-200 rounded-lg" />
                        </div>
                      </div>
                    </div>

                    <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                      Update Address
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Orders */}
              <motion.div variants={fadeInUp}>
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <Package className="w-5 h-5 text-purple-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Recent Orders</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        { id: "#ORD-001", date: "2024-01-15", status: "Delivered", total: "LKR 5,200" },
                        { id: "#ORD-002", date: "2024-01-10", status: "Processing", total: "LKR 3,400" },
                        { id: "#ORD-003", date: "2024-01-05", status: "Delivered", total: "LKR 2,800" },
                      ].map((order, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-semibold text-gray-900">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <Badge
                              className={`mb-1 ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {order.status}
                            </Badge>
                            <p className="font-semibold text-gray-900">{order.total}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="mt-6 w-full border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full bg-transparent"
                    >
                      View All Orders
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
