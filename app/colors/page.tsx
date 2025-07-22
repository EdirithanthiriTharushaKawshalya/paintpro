"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Heart, ChevronLeft, ChevronRight } from "lucide-react"

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

const colorFamilies = [
  { name: "All Colors", count: 120, color: "bg-gradient-to-br from-purple-400 to-purple-600" },
  { name: "Neutrals", count: 45, color: "bg-gray-400" },
  { name: "Blues", count: 32, color: "bg-blue-500" },
  { name: "Greens", count: 28, color: "bg-green-500" },
  { name: "Yellows", count: 24, color: "bg-yellow-500" },
  { name: "Reds", count: 20, color: "bg-red-500" },
  { name: "Purples", count: 18, color: "bg-purple-500" },
  { name: "Oranges", count: 15, color: "bg-orange-500" },
  { name: "Pinks", count: 12, color: "bg-pink-500" },
  { name: "Browns", count: 10, color: "bg-amber-700" },
]

const paintColors = [
  {
    name: "Ocean Breeze",
    description: "A calming blue reminiscent of ocean waves",
    price: "LKR 1,250",
    color: "bg-blue-500",
    category: "Blues",
    finish: "Matte",
    isFavorite: false,
  },
  {
    name: "Forest Whisper",
    description: "Fresh green inspired by forest canopies",
    price: "LKR 3,100",
    color: "bg-green-500",
    category: "Greens",
    finish: "Satin",
    isFavorite: false,
  },
  {
    name: "Sunset Glow",
    description: "Warm yellow capturing golden hour light",
    price: "LKR 1,250",
    color: "bg-yellow-500",
    category: "Yellows",
    finish: "Gloss",
    isFavorite: true,
  },
  {
    name: "Charcoal Elegance",
    description: "Sophisticated dark gray for modern spaces",
    price: "LKR 1,250",
    color: "bg-gray-700",
    category: "Neutrals",
    finish: "Matte",
    isFavorite: false,
  },
  {
    name: "Coral Dream",
    description: "Vibrant coral bringing energy to any space",
    price: "LKR 3,250",
    color: "bg-red-400",
    category: "Reds",
    finish: "Satin",
    isFavorite: false,
  },
  {
    name: "Pearl White",
    description: "Classic white with subtle pearl undertones",
    price: "LKR 1,250",
    color: "bg-gray-100 border border-gray-200",
    category: "Neutrals",
    finish: "Matte",
    isFavorite: false,
  },
  {
    name: "Midnight Navy",
    description: "Deep navy blue for dramatic accent walls",
    price: "LKR 3,150",
    color: "bg-blue-900",
    category: "Blues",
    finish: "Gloss",
    isFavorite: false,
  },
  {
    name: "Sage Harmony",
    description: "Muted green perfect for peaceful interiors",
    price: "LKR 1,250",
    color: "bg-green-400",
    category: "Greens",
    finish: "Satin",
    isFavorite: false,
  },
  {
    name: "Terracotta Earth",
    description: "Earthy red-orange inspired by clay pottery",
    price: "LKR 2,800",
    color: "bg-orange-600",
    category: "Reds",
    finish: "Matte",
    isFavorite: false,
  },
  {
    name: "Lavender Dreams",
    description: "Soft purple for serene bedroom spaces",
    price: "LKR 2,400",
    color: "bg-purple-400",
    category: "Purples",
    finish: "Satin",
    isFavorite: false,
  },
  {
    name: "Cream Delight",
    description: "Warm cream perfect for cozy living rooms",
    price: "LKR 1,850",
    color: "bg-yellow-100 border border-yellow-200",
    category: "Neutrals",
    finish: "Matte",
    isFavorite: false,
  },
  {
    name: "Rose Blush",
    description: "Gentle pink for romantic atmospheres",
    price: "LKR 2,200",
    color: "bg-pink-300",
    category: "Pinks",
    finish: "Satin",
    isFavorite: false,
  },
]

export default function ColorsPage() {
  const [selectedFamily, setSelectedFamily] = useState("All Colors")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFinish, setSelectedFinish] = useState("all")
  const [colors, setColors] = useState(paintColors)
  const [currentPage, setCurrentPage] = useState(1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const itemsPerPage = 9

  const filteredColors = colors.filter((color) => {
    const matchesFamily = selectedFamily === "All Colors" || color.category === selectedFamily
    const matchesSearch = color.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFinish = selectedFinish === "all" || color.finish.toLowerCase() === selectedFinish.toLowerCase()
    return matchesFamily && matchesSearch && matchesFinish
  })

  const totalPages = Math.ceil(filteredColors.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedColors = filteredColors.slice(startIndex, startIndex + itemsPerPage)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  const toggleFavorite = (index: number) => {
    const actualIndex = colors.findIndex((c) => c.name === paginatedColors[index].name)
    const updatedColors = [...colors]
    updatedColors[actualIndex].isFavorite = !updatedColors[actualIndex].isFavorite
    setColors(updatedColors)
  }

  const handleSearch = () => {
    setCurrentPage(1)
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="initial" animate="animate" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm" />
            </div>
            Explore Our Color Palette
          </h1>
          <p className="text-gray-600 mb-8">
            DISCOVER THE PERFECT COLOR FOR YOUR SPACE FROM OUR EXTENSIVE COLLECTION OF PREMIUM PAINT COLORS
          </p>
        </motion.div>

        {/* Browse by Color Family */}
        <motion.section className="mb-8" initial="initial" animate="animate" variants={staggerContainer}>
          <motion.h2 className="text-xl font-semibold text-gray-900 mb-6" variants={fadeInUp}>
            Browse by Color Family
          </motion.h2>

          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 p-0"
              onClick={scrollLeft}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-12"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {colorFamilies.map((family, index) => (
                <motion.div key={family.name} variants={fadeInUp} className="flex-shrink-0">
                  <Card
                    className={`min-w-48 cursor-pointer transition-all duration-300 backdrop-blur-sm border-0 shadow-lg ${
                      selectedFamily === family.name
                        ? "ring-2 ring-purple-500 bg-purple-50/90"
                        : "bg-white/90 hover:shadow-xl"
                    }`}
                    onClick={() => {
                      setSelectedFamily(family.name)
                      setCurrentPage(1)
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 ${family.color} rounded-2xl mx-auto mb-3`} />
                      <h3 className="font-semibold text-gray-900">{family.name}</h3>
                      <p className="text-sm text-gray-600">{family.count} Colors</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 p-0"
              onClick={scrollRight}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.section>

        {/* Search and Filters */}
        <motion.div
          className="mb-8 flex flex-col md:flex-row gap-4"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="flex gap-2 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search colors..."
                className="pl-10 bg-white/90 backdrop-blur-sm border-purple-200 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6" onClick={handleSearch}>
              Search
            </Button>
          </div>

          <Select value={selectedFinish} onValueChange={setSelectedFinish}>
            <SelectTrigger className="w-48 bg-white/90 backdrop-blur-sm border-purple-200 rounded-full">
              <SelectValue placeholder="Filter by Finish" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Finishes</SelectItem>
              <SelectItem value="matte">Matte</SelectItem>
              <SelectItem value="satin">Satin</SelectItem>
              <SelectItem value="gloss">Gloss</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Color Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {paginatedColors.map((color, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/90 border-0 shadow-lg group">
                <div className="relative">
                  <div className={`h-48 ${color.color} relative overflow-hidden`}>
                    <Badge className="absolute top-3 left-3 bg-white/90 text-gray-700 hover:bg-white">
                      {color.category}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`absolute top-3 right-3 backdrop-blur-sm hover:bg-white/90 ${
                        color.isFavorite ? "bg-red-50 text-red-600" : "bg-white/90 text-gray-700"
                      }`}
                      onClick={() => toggleFavorite(index)}
                    >
                      <Heart className={`w-4 h-4 ${color.isFavorite ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{color.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{color.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-gray-900">{color.price}</span>
                    <Badge variant="outline" className="text-xs">
                      Finish: {color.finish}
                    </Badge>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex justify-center items-center gap-2"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <Button
              variant="outline"
              size="sm"
              className="rounded-full bg-transparent"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                size="sm"
                className={`w-10 h-10 rounded-full ${
                  page === currentPage ? "bg-purple-600 hover:bg-purple-700" : "bg-transparent"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              className="rounded-full bg-transparent"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
