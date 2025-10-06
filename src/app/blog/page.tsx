"use client"
import { useState, useEffect } from "react"
import { Settings2, X } from "lucide-react"
import BlogSlideBar from "@/components/BlogSlideBar"
import BlogButtons from "@/components/BlogButtons"
import CardProducts from "@/components/CardProducts"

export default function Blog() {
  const [showSidebar, setShowSidebar] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [filters, setFilters] = useState({
    categories: [] as string[],
    gender: [] as string[],
    price: [] as string[],
  })


  const toggleSidebar = () => setShowSidebar(!showSidebar)

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="blog-container p-2 sm:p-4 lg:p-6 relative">
      {/* Header */}
      <div className="flex flex-row justify-between items-center gap-4 mb-4 px-2 sm:px-5">
        <h3 className="text-xl sm:text-2xl font-semibold">Products</h3>
        <button
          onClick={toggleSidebar}
          className="flex items-center gap-1 text-sm sm:text-base font-medium transition-colors"
        >
          {showSidebar ? "Hide Filters" : "Show Filters"}
          <Settings2 className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>


      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar for Desktop (normal show/hide) */}
        {!isMobile && showSidebar && (
          <div className="w-full lg:w-64 shrink-0 transition-all duration-300">
            <BlogSlideBar onFilter={setFilters} />
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <CardProducts filters={filters} />
        </div>
      </div>

      {/* Sidebar for Mobile (overlay) */}
      {isMobile && showSidebar && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={toggleSidebar}
          ></div>
          <div className="fixed top-0 left-0 h-full w-72 bg-background z-50 shadow-lg p-5 overflow-y-auto transition-transform duration-300">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-lg">Filters</h4>
              <button onClick={toggleSidebar}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <BlogSlideBar onFilter={setFilters} />
          </div>
        </>
      )}

      <BlogButtons />
    </div>
  )
}
