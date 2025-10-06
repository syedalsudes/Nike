import dynamic from "next/dynamic"

const HeroSection = dynamic(() => import("@/components/HeroSection"))
const BestOfAirMaxSection = dynamic(() => import("@/components/BestOfAirMaxSection"))
const FeaturedSection = dynamic(() => import("@/components/FeaturedSection"))
const DontMissSection = dynamic(() => import("@/components/DontMissSection"))
const EssentialsSection = dynamic(() => import("@/components/EssentialsSection"))
const CategorySection = dynamic(() => import("@/components/CategorySection"))

export default function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <BestOfAirMaxSection />
      <FeaturedSection />
      <DontMissSection />
      <EssentialsSection />
      <CategorySection />
    </div>
  )
}
