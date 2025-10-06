
import Image from "next/image"
import { CheckCircle, Flame, Trophy } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-r from-black to-[#1a1a1a] w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-8 md:pt-12 lg:pt-16 pb-12 lg:pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div className="text-white space-y-6 order-2 md:order-1">
                        <h1 className="font-extrabold leading-tight text-[clamp(1.8rem,4vw,3.5rem)]">
                            Unleash Your Style <br />
                            With Air Jordan 6
                        </h1>

                        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-md">
                            Not just sneakers—an icon. Engineered for champions, designed for the streets. Step into performance, power, and timeless design.
                        </p>

                        {/* Feature Points */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-orange-500 w-6 h-6" />
                                <span>Premium Comfort & Fit</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Trophy className="text-orange-500 w-6 h-6" />
                                <span>Built for Champions</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Flame className="text-orange-500 w-6 h-6" />
                                <span>Street-Ready Style</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative order-1 md:order-2 flex items-center justify-center">
                        <div className="relative w-[80%] sm:w-[70%] md:w-full max-w-[450px] lg:max-w-[550px] aspect-square">
                            <Image
                                src="/herosection.svg"
                                alt="Air Jordan 6 Retro SP"
                                fill
                                className="object-contain drop-shadow-[0_8px_30px_rgba(255,100,0,0.5)]
                                transition-transform duration-300 ease-in-out
                                hover:scale-105 hover:translate-z-10
                                select-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
