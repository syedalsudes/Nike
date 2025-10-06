"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Check } from "lucide-react"
import { useParams } from "next/navigation"
import { useCart } from "@/contexts/CartContext"
import { useFavorites } from "@/contexts/FavoritesContext"
import { Product } from "@/types/product"
import LoadingSpinner from "@/components/LoadingSpinner"



export default function CardDetailsPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [added, setAdded] = useState(false)
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [colorError, setColorError] = useState("");
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()


  const handleFavorite = () => {
    if (!product) return
    if (!selectedColor) {
      setColorError("Please select a color first!")
      return
    }

    if (isFavorite(product.productName)) {
      removeFromFavorites(product.productName)
    } else {
      addToFavorites(product, selectedColor)
    }
  }



  const handleAddToCart = () => {
    if (!product || !selectedColor) {
      setColorError("Please select a color first!"); // inline error
      return;
    }
    addToCart({ ...product, color: selectedColor, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    setColorError(""); // reset error after successful add
  };




  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/api/product")
        const result = await response.json()
        if (result.success && Array.isArray(result.data)) {
          const productIndex = Number.parseInt(id as string)
          const foundProduct = result.data[productIndex]
          if (foundProduct) {
            setProduct(foundProduct)
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <LoadingSpinner />
    )
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Product not found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background min-h-screen py-8 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square bg-gray-50 select-none rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.productName}
                fill
                className="object-cover"
                priority
              />
              {product.status && (
                <div className="absolute top-4 left-4 bg-background text-Orange px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  {product.status}
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Category */}
            <div className="text-Orange font-semibold uppercase tracking-wide text-sm">{product.category}</div>

            {/* Product Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {product.productName}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray600 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Select Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all cursor-pointer
                      ${selectedColor === color ? "border-orange-500 scale-110 shadow-md" : "border-gray-300 hover:border-gray-400"}`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
                {colorError && <p className="text-red-600 text-sm mt-1">{colorError}</p>}
              </div>
            )}


            {/* Price */}
            <div className="pt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-foreground">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray800">MRP (Incl. of all taxes)</span>
              </div>
            </div>

            {/* Stock Status */}
            <div className="text-sm">
              {product.inventory > 0 ? (
                <span className="text-green-600 font-semibold">✓ In Stock ({product.inventory} available)</span>
              ) : (
                <span className="text-red-600 font-semibold">✗ Out of Stock</span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold transition-all duration-300 text-base
                  ${added
                    ? "bg-orange-500 text-white scale-105"
                    : "bg-black text-white hover:bg-gray-800"
                  }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5 animate-bounce" />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add To Cart
                  </>
                )}
              </button>
              <button
                onClick={handleFavorite}
                className={`flex items-center justify-center gap-2 px-6 py-4 border-2 rounded-full font-semibold transition-all text-base
                  ${isFavorite(product.productName)
                    ? "bg-red-100 border-red-500 text-red-600"
                    : "border-gray-300 hover:border-black"
                  }`}
              >
                <Heart
                  className={`w-5 h-5 transition-all ${isFavorite(product.productName) ? "fill-red-600 text-red-600" : ""
                    }`}
                />
                <span className="hidden sm:inline">
                  {isFavorite(product.productName) ? "Favorited" : "Favorite"}
                </span>
              </button>

            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-full">
                  <Truck className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Free Delivery</p>
                  <p className="text-xs text-gray-500">On orders above ₹14,000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-full">
                  <RotateCcw className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Easy Returns</p>
                  <p className="text-xs text-gray-500">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-full">
                  <Shield className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Secure Payment</p>
                  <p className="text-xs text-gray-500">100% secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
