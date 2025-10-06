"use client"
import React from "react"

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent text-red-600">
      <div className="w-20 h-20 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      <h1 className="mt-4 text-xl font-semibold">Loading...</h1>
    </div>
  )
}

export default LoadingSpinner
