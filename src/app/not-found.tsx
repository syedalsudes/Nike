"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
            {/* Soft Red Glow Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1 }}
                className="absolute w-[600px] h-[600px] bg-red-600/30 rounded-full blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            />

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center px-6"
            >
                <h1 className="text-7xl md:text-9xl font-extrabold text-red-600 tracking-tight drop-shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                    Page Not Found
                </h2>
                <p className="text-muted-foreground mt-3 max-w-md mx-auto">
                    Opps! the page you&#39;re looking for doesn&#39;t exist or may have been moved.
                </p>


                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-medium mt-8 hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-red-600/30"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Go Back Home
                </Link>
            </motion.div>

            {/* Floating subtle gradient lines */}
            <div className="absolute bottom-10 left-10 w-32 h-[2px] bg-gradient-to-r from-red-600/40 to-transparent animate-pulse"></div>
            <div className="absolute top-10 right-10 w-32 h-[2px] bg-gradient-to-l from-red-600/40 to-transparent animate-pulse"></div>
        </div>
    )
}
