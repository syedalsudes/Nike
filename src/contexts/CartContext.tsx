"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { Product } from "@/types/product"

interface CartContextType {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (index: number) => void
  clearCart: () => void
  getTotal: () => number
  updateQuantity: (index: number, quantity: number) => void
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) setCart(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0)

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(
        item =>
          item.productName === product.productName &&
          item.color === product.color
      )
      if (existing) {
        return prev.map(item =>
          item.productName === product.productName && item.color === product.color
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
  }

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity < 1) return
    setCart(prev =>
      prev.map((item, i) => (i === index ? { ...item, quantity } : item))
    )
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getTotal, updateQuantity, cartCount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within a CartProvider")
  return context
}
