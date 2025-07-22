"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Heart, Star, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

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

const products = [
  {
    name: "Premium Wall Paint - Ocean Blue",
    rating: 4,
    price: "LKR 2,850",
    originalPrice: "LKR 3,200",
    image: "bg-blue-500",
    category: "Interior Paint",
    isFavorite: false,
  },
  {
    name: "Eco-Friendly Interior Paint - Sage Green",
    rating: 5,
    price: "LKR 2,900",
    originalPrice: "LKR 3,200",
    image: "bg-green-500",
    category: "Interior Paint",
    isFavorite: true,
  },
  {
    name: "Professional Brush Set - 5 Pieces",
    rating: 4,
    price: "LKR 1,250",
    originalPrice: "",
    image: "bg-gray-400",
    category: "Tools",
    isFavorite: false,
  },
  {
    name: "Exterior Weather Shield - White",
    rating: 4,
    price: "LKR 4,200",
    originalPrice: "",
    image: "bg-gray-100 border border-gray-200",
    category: "Exterior Paint",
    isFavorite: false,
  },
  {
    name: "Primer Coat - Universal Base",
    rating: 4,
    price: "LKR 1,850",
    originalPrice: "",
    image: "bg-gray-300",
    category: "Primer",
    isFavorite: false,
  },
  {
    name: "Paint Roller Kit - Professional",
    rating: 4,
    price: "LKR 3,850",
    originalPrice: "",
    image: "bg-orange-400",
    category: "Tools",
    isFavorite: false,
  },
  {
    name: "Premium Wall Paint - Crimson Red",
    rating: 4,
    price: "LKR 2,850",
    originalPrice: "LKR 3,200",
    image: "bg-red-500",
    category: "Interior Paint",
    isFavorite: false,
  },
  {
    name: "Premium Exterior Paint - Forest Green",
    rating: 4,
    price: "LKR 3,200",
    originalPrice: "LKR 3,500",
    image: "bg-green-600",
    category: "Exterior Paint",
    isFavorite: false,
  },
  {
    name: "Premium Wall Paint - Charcoal Black",
    rating: 4,
    price: "LKR 2,850",
    originalPrice: "LKR 3,200",
    image: "bg-gray-900",
    category: "Interior Paint",
    isFavorite: false,
  },
  {
    name: "Paint Sprayer - Professional Grade",
    rating: 5,
    price: "LKR 8,500",
    originalPrice: "LKR 9,200",
    image: "bg-blue-400",
    category: "Tools",
    isFavorite: false,
  },
  {
    name: "Texture Paint - Sand Finish",
    rating: 4,
    price: "LKR 3,400",
    originalPrice: "",
    image: "bg-yellow-600",
    category: "Interior Paint",
    isFavorite: false,
  },
  {
    name: "Masking Tape Set - Professional",
    rating: 4,
    price: "LKR 850",
    originalPrice: "",
    image: "bg-yellow-400",
    category: "Accessories",
    isFavorite: false,
  },
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [productList, setProductList] = useState(products)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const categories = ["Interior Paint", "Exterior Paint", "Primer", "Tools", "Accessories"]
  const brands = ["PaintPro", "ColorMax", "EcoShield", "WeatherGuard", "ProTools"]

  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setSelectedCategories([category])
    }
  }, [searchParams])

  const filteredProducts = productList.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.some((brand) => product.name.includes(brand))
    return matchesSearch && matchesCategory && matchesBrand
  })

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
    setCurrentPage(1)
  }

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
    setCurrentPage(1)
  }

  const toggleFavorite = (index: number) => {
    const actualIndex = productList.findIndex((p) => p.name === paginatedProducts[index].name)
    const updatedProducts = [...productList]
    updatedProducts[actualIndex].isFavorite = !updatedProducts[actualIndex].isFavorite
    setProductList(updatedProducts)
  }

  const handleSearch = () => {
    setCurrentPage(1)
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="mb-8 mt-16" initial="initial" animate="animate" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600 mb-6">DISCOVER OUR COMPLETE RANGE OF PREMIUM PAINTS AND ACCESSORIES</p>

          <div className="flex gap-2 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-white/90 backdrop-blur-sm border-purple-200 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div className="lg:col-span-1" initial="initial" animate="animate" variants={fadeInUp}>
            <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => handleCategoryChange(category)}
                        />
                        <label htmlFor={category} className="text-sm text-gray-700 cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Brands</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => handleBrandChange(brand)}
                        />
                        <label htmlFor={brand} className="text-sm text-gray-700 cursor-pointer">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  className="w-full mb-4 border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full bg-transparent"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedBrands([])
                    setSearchTerm("")
                    setCurrentPage(1)
                  }}
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <motion.div
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {paginatedProducts.map((product, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/90 border-0 shadow-lg group">
                    <div className="relative">
                      <div className={`h-48 ${product.image} relative overflow-hidden`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-sm hover:bg-white/90 ${
                            product.isFavorite ? "bg-red-50 text-red-600" : "bg-white/90 text-gray-700"
                          }`}
                          onClick={() => toggleFavorite(index)}
                        >
                          <Heart className={`w-4 h-4 ${product.isFavorite ? "fill-current" : ""}`} />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="font-semibold text-gray-900">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>

                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                        <ShoppingCart className="w-4 h-4 mr-2" />
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

            {/* No Results */}
            {paginatedProducts.length === 0 && (
              <motion.div className="text-center py-12" initial="initial" animate="animate" variants={fadeInUp}>
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4 border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full bg-transparent"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedBrands([])
                    setSearchTerm("")
                    setCurrentPage(1)
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
