import Image from "next/image"
import { Users, Globe, Award } from "lucide-react"

export default function About() {
    return (
        <section className="relative bg-background w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-8 md:pt-12 lg:pt-16 pb-12 lg:pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div className="text-white space-y-6 order-2 md:order-1">
                        <h1 className="font-extrabold text-gray800 leading-tight text-[clamp(1.8rem,4vw,3.5rem)]">
                            About <span className="text-Orange">Our Brand</span>
                        </h1>

                        <p className="text-base md:text-lg lg:text-xl text-gray800 max-w-md">
                            We are committed to delivering high-quality, stylish, and comfortable footwear that empowers everyone to express themselves. Our mission is to combine performance with style, making every step count.
                        </p>

                        {/* Feature Points */}
                        <div className="space-y-3 text-gray800">
                            <div className="flex items-center gap-3">
                                <Users className="text-Orange w-6 h-6" />
                                <span>Trusted by Thousands</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Globe className="text-Orange w-6 h-6" />
                                <span>Global Presence</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="text-Orange w-6 h-6" />
                                <span>Award-Winning Designs</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative order-1 md:order-2 flex items-center justify-center">
                        <div className="relative w-[80%] sm:w-[70%] md:w-full max-w-[450px] lg:max-w-[550px] aspect-square">
                            <Image
                                src="/about.svg"
                                alt="About Our Brand"
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
