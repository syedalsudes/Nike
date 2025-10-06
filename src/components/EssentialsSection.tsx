export default function EssentialsSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8">The Essentials</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="card9.png"
                alt="Men's Essentials"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 md:px-8 md:py-3 bg-primaryWhite text-deepBlack font-semibold rounded-full hover:bg-Orange transition-colors text-sm md:text-base">
                Men's
              </button>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="card10.png"
                alt="Women's Essentials"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 md:px-8 md:py-3 bg-primaryWhite text-deepBlack font-semibold rounded-full hover:bg-Orange transition-colors text-sm md:text-base">
                Women's
              </button>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="card11.png"
                alt="Kids' Essentials"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 md:px-8 md:py-3 bg-primaryWhite text-deepBlack font-semibold rounded-full hover:bg-Orange transition-colors text-sm md:text-base">
                Kid's
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
