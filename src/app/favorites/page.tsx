"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Trash2, CheckCircle2, ShoppingBag } from "lucide-react"
import { useFavorites } from "@/contexts/FavoritesContext"
import { useCart } from "@/contexts/CartContext"
import { useState } from "react"

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites()
  const { addToCart } = useCart()
  const [addedItems, setAddedItems] = useState<string[]>([])

  const clearAllFavorites = () => {
    localStorage.removeItem("favorites")
    window.location.reload()
  }

  const handleAddToCart = (item: any) => {
    addToCart({ ...item, quantity: 1 })
    setAddedItems((prev) => [...prev, item.productName])
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((name) => name !== item.productName))
    }, 1500)
  }

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-8 flex flex-col gap-8 min-h-[80vh]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-extrabold text-gray800 flex items-center gap-2">
          <Heart className="text-red-500 fill-red-500" /> Your Favorites
        </h1>

        {favorites.length > 0 && (
          <button
            onClick={clearAllFavorites}
            className="text-sm px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-md hover:scale-105 transition"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Empty State */}
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-16 space-y-6">
          <Heart className="text-red-500 w-12 h-12 animate-bounce" />
          <h2 className="text-2xl font-semibold text-gray600">Your favorites list is empty</h2>
          <p className="text-gray600 max-w-md">
            You haven’t added anything yet! Browse our products and find something you love.
          </p>
          <Link
            href="/blog"
            className="flex items-center gap-2 px-6 py-3 bg-Orange text-white rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition"
          >
            <ShoppingBag className="w-5 h-5" /> Start Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {favorites.map((item, index) => {
            const isAdded = addedItems.includes(item.productName)
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 border border-gray100 bg-gray300 backdrop-blur-sm rounded-2xl p-4 shadow-sm hover:shadow-md transition"
              >
                {/* Product Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 flex-1 text-center sm:text-left">
                  <div className="w-28 h-28 relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.productName}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg text-gray800">{item.productName}</h2>
                    <p className="text-gray600">₹ {item.price.toLocaleString()}</p>

                    {item.color && (
                      <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                        <span className="text-sm text-gray600 font-medium">Color:</span>
                        <div
                          className="w-5 h-5 rounded-full border border-gray300 shadow-sm"
                          style={{ backgroundColor: item.color.toLowerCase() }}
                          title={item.color}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={isAdded}
                    className={`px-5 py-2 text-sm font-medium rounded-full text-white transition-transform duration-300 
                      ${isAdded
                        ? "bg-green-500 scale-105"
                        : "bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 shadow-md"
                      }`}
                  >
                    {isAdded ? (
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Added!
                      </span>
                    ) : (
                      "Add to Cart"
                    )}
                  </button>

                  <button
                    onClick={() => removeFromFavorites(item.productName)}
                    className="p-2 rounded-full hover:bg-gray100 transition"
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
