import Link from "next/link"


export default function FeaturedSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">Featured</h1>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <video
              src="/videos/nike-shoes.mp4"
              className="w-full h-full object-cover"
              loop
              autoPlay
              muted
            ></video>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center mt-8 md:mt-12 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="text-sm md:text-base lg:text-lg mt-4 md:mt-6">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <Link href="/blog">
            <button className="px-6 md:px-8 py-2 md:py-3 bg-deepBlack2 text-primaryWhite rounded-full mt-6 md:mt-8 hover:bg-Orange hover:text-primaryWhite transition-colors text-sm md:text-base font-medium">
              Find Your Shoe
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
