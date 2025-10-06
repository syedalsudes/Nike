"use client"
import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import Link from "next/link"

export default function SearchBar() {
    const [query, setQuery] = useState("")
    const [products, setProducts] = useState<{ productName: string; id: number }[]>([])
    const [filtered, setFiltered] = useState<{ productName: string; id: number }[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/api/product")
                const data = await res.json()
                setProducts(
                    data.data.map((p: any, i: number) => ({ productName: p.productName, id: i }))
                )
            } catch (err) {
                console.error(err)
            }
        }
        fetchProducts()
    }, [])

    useEffect(() => {
        if (query.trim() === "") {
            setFiltered([])
        } else {
            setFiltered(
                products.filter((p) =>
                    p.productName.toLowerCase().includes(query.toLowerCase())
                )
            )
        }
    }, [query, products])

    const handleClear = () => setQuery("")

    return (
        <div className="relative flex items-center bg-muted rounded-full px-4 py-2 w-full lg:w-auto">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
                type="search"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent outline-none text-sm px-3 w-full lg:w-64 text-foreground placeholder:text-muted-foreground"
            />
            {query && (
                <button
                    onClick={handleClear}
                    className="absolute right-2 text-muted-foreground hover:text-red-500"
                >
                    <X className="w-5 h-5" />
                </button>
            )}

            {/* Dropdown showing filtered products */}
            {filtered.length > 0 && (
                <div className="absolute top-full left-0 mt-1 w-full bg-background shadow-lg rounded-md max-h-60 overflow-y-auto z-50">
                    {filtered.map((p) => (
                        <Link
                            key={p.id}
                            href={`/blog/${p.id}`}
                            className="block px-4 py-2 text-sm hover:bg-gray100 transition-colors"
                            onClick={handleClear}
                        >
                            {p.productName}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
