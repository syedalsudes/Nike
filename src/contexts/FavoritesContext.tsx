"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { Product } from "@/types/product"

interface FavoritesContextType {
    favorites: Product[]
    addToFavorites: (product: Product, color?: string) => void
    removeFromFavorites: (productId: string) => void
    isFavorite: (productId: string) => boolean
    favoritesCount: number  
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Product[]>([])
    const favoritesCount = favorites.length


    // Load favorites from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("favorites")
        if (stored) setFavorites(JSON.parse(stored))
    }, [])

    // Save favorites to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (product: Product, color?: string) => {
        const productWithColor = { ...product, color: color || "" }
        if (!favorites.find(item => item.productName === product.productName)) {
            setFavorites(prev => [...prev, productWithColor])
        }
    }


    const removeFromFavorites = (productId: string) => {
        setFavorites(prev => prev.filter(item => item.productName !== productId))
    }

    const isFavorite = (productId: string) => {
        return favorites.some(item => item.productName === productId)
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite, favoritesCount, }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext)
    if (!context) throw new Error("useFavorites must be used within a FavoritesProvider")
    return context
}
