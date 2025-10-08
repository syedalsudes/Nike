"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Product } from "@/types/product"
import LoadingSpinner from "@/components/LoadingSpinner"

interface CardProductsProps {
  filters: {
    categories: string[]
    gender: string[]
    price: string[]
  }
  showSidebar: boolean
}


const CardProducts: React.FC<CardProductsProps> = ({ filters, showSidebar }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/product")
      .then(res => res.json())
      .then(res => {
        if (res.success) setProducts(res.data)
      })
      .finally(() => setLoading(false))
  }, [])

  // Filter products
  const filteredProducts = products.filter(p => {
    // Category filter
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.some(c => p.category.includes(c))

    // Gender filter based on API category or productName
    const genderMatch =
      filters.gender.length === 0 ||
      filters.gender.some(g => {
        if (g === "Men") return p.category.includes("Men")
        if (g === "Women") return p.category.includes("Women")
        if (g === "Unisex") return !p.category.includes("Men") && !p.category.includes("Women")
        return true
      })

    // Price filter
    const priceMatch =
      filters.price.length === 0 ||
      filters.price.some(pr => {
        if (pr === "under2500") return p.price <= 2500
        if (pr === "above2500") return p.price > 2500
        return true
      })

    return categoryMatch && genderMatch && priceMatch
  })

  if (loading) return (
    <LoadingSpinner />
  )
  if (filteredProducts.length === 0) return <div className="text-center mt-10">No products found.</div>

  return (
    <div
      className={`grid gap-6 p-4 sm:p-8 
                grid-cols-1 sm:grid-cols-2 
                ${showSidebar
          ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
          : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"}`}
    >
      {filteredProducts.map((product, index) => (
        <Link key={index} href={`/blog/${index}`} className="group">
          <div className="flex flex-col h-full bg-background border border-gray800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

            {/* Image */}
            <div className="relative w-full aspect-square bg-background overflow-hidden p-[7px]">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.productName}
                  fill
                  className="object-cover select-none rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between flex-grow p-5 space-y-3">
              <p className="text-sm text-orange-500 font-semibold uppercase tracking-wide">
                {product.category}
              </p>
              <h2 className="text-lg font-bold text-gray800">{product.productName}</h2>
              <p className="text-sm text-gray600 mt-3 line-clamp-2">{product.description}</p>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="flex gap-2 mt-2">
                  Colors:
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-5 h-5 rounded-full border border-gray600"
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between mt-3">
                <span className="text-xl font-bold text-gray800">₹{product.price.toLocaleString()}</span>
                <span className={`text-xs font-medium ${product.inventory > 0 ? "text-green-600" : "text-red-600"}`}>
                  {product.inventory > 0 ? `In Stock (${product.inventory})` : "Out of Stock"}
                </span>
              </div>

              <button className="w-full mt-3 bg-black hover:bg-gray-800 text-white py-2.5 rounded-3xl flex items-center justify-center gap-2 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CardProducts
