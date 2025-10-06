"use client"

import Image from "next/image";
import { Heart, Trash2, Plus, Minus, ShoppingCart, Store } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import Link from "next/link";
import { useState } from "react";

export default function AddToCartPage() {
    const { cart, getTotal, removeFromCart, clearCart, updateQuantity } = useCart();
    const { addToFavorites, favorites } = useFavorites();
    const [addedToFav, setAddedToFav] = useState<string[]>([]);

    const handleAddToFav = (item: any) => {
        addToFavorites(item, item.color); // tumhara color preserve ho raha hai
        setAddedToFav(prev => [...prev, item.productName]);
        setTimeout(() => {
            setAddedToFav(prev => prev.filter(name => name !== item.productName));
        }, 1500);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto">
            {/* Left: Cart Items */}
            <div className="flex-1">
                <div className="bg-gray100 p-4 rounded-md mb-6 flex justify-between items-center">
                    <div>
                        <h5 className="font-medium">Free Delivery</h5>
                        <p className="text-sm text-gray600">
                            Applies to orders of ₹14,000.00 or more.
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">Cart</h1>
                    {cart.length > 0 && (
                        <button
                            onClick={clearCart}
                            className="text-red-600 hover:underline font-semibold"
                        >
                            Delete All
                        </button>
                    )}
                </div>

                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center mt-10 text-gray-600">
                        <ShoppingCart className="w-12 h-12 text-gray-500 animate-bounce mb-2" />
                        <p className="text-lg font-medium">Your cart is empty</p>
                        <p className="text-sm text-gray-400">Start shopping to add items!</p>
                        <Link href="/blog">
                            <button className="mt-4 px-5 py-2 bg-Orange text-white rounded-full hover:bg-orange-500 transition-all duration-300 flex items-center gap-2">
                                <Store className="w-5 h-5" />
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                ) : (
                    cart.map((item, index) => {
                        const isFav = favorites.some(fav => fav.productName === item.productName);
                        const justAdded = addedToFav.includes(item.productName);
                        return (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b py-4"
                            >
                                <div className="w-[120px] h-[120px] flex-shrink-0">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.productName}
                                        width={120}
                                        height={120}
                                        className="rounded-md object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold">{item.productName}</h3>
                                        <h2 className="font-semibold">₹ {item.price.toLocaleString()}</h2>
                                    </div>

                                    {/* Selected Color */}
                                    {item.color && (
                                        <p className="mt-1 text-sm flex items-center gap-2">
                                            Color: <span className="w-5 h-5 border-gray-500 border-2 rounded-full" style={{ backgroundColor: item.color }}></span> {item.color}
                                        </p>
                                    )}

                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => updateQuantity(index, item.quantity - 1)}
                                            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray300 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="px-3">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(index, item.quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray300 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className="flex gap-4 mt-3">
                                        <button
                                            onClick={() => handleAddToFav(item)}
                                            disabled={isFav || justAdded}
                                            className="transition-colors"
                                        >
                                            <Heart
                                                className={`w-6 h-6 cursor-pointer transition-colors ${isFav || justAdded ? "fill-red-500 text-red-500" : "hover:text-red-500"}`}
                                            />
                                        </button>

                                        <Trash2
                                            onClick={() => removeFromCart(index)}
                                            className="cursor-pointer hover:text-red-600 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>

            {/* Right: Summary */}
            {cart.length > 0 && (
                <div className="w-full lg:w-[350px] border p-6 rounded-md shadow-sm h-fit">
                    <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₹ {getTotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Estimated Delivery & Handling</span>
                        <span>Free</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>₹ {getTotal().toLocaleString()}</span>
                    </div>
                    <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold">
                        Member Checkout
                    </button>
                </div>
            )}
        </div>
    );
}
