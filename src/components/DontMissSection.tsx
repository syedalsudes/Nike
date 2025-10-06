import Link from "next/link";

export default function DontMissSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">Don't Miss</h1>
          <div className="relative w-full aspect-video md:aspect-[16/9] lg:aspect-[21/9] rounded-lg overflow-hidden">
            <img src="dontmissbg.svg" alt="Flight Essentials" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center mt-8 md:mt-12 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
            FLIGHT ESSENTIALS
          </h1>
          <p className="text-sm md:text-base lg:text-lg mt-4 md:mt-6">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <Link href="/blog">
            <button className="px-6 md:px-8 py-2 md:py-3 bg-deepBlack2 text-primaryWhite rounded-full mt-6 md:mt-8 hover:bg-Orange hover:text-primaryWhite transition-colors text-sm md:text-base font-medium">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
