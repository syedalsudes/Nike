"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Product } from "@/types/product";


export default function BlogButtons() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/product") // local API route
        const data = await res.json()
        setProducts(data.data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="w-full max-w-6xl mt-12 sm:mt-16 lg:mt-20 mx-auto px-4">
      <h1 className="text-lg sm:text-xl font-bold py-4 sm:py-5">
        Related Products
      </h1>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {products.slice(0, 7).map((product, index) => (
          <Link
            key={index}
            href={`/blog/${index}`}
            className="px-3 sm:px-4 py-2 border border-gray300 rounded-full text-xs sm:text-sm font-medium hover:bg-gray100 transition-colors"
          >
            {product.productName}
          </Link>
        ))}
      </div>
    </div>
  )
}
