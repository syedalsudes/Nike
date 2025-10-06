"use client"

import { Truck, CreditCard, ShieldCheck, Headphones } from "lucide-react"

type Service = {
  id: number
  title: string
  description: string
  icon: any
  color: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Fast Shipping",
    description: "Get your products delivered quickly and safely to your doorstep.",
    icon: Truck,
    color: "bg-Orange"
  },
  {
    id: 2,
    title: "Secure Payments",
    description: "We provide safe and secure payment options for peace of mind.",
    icon: CreditCard,
    color: "bg-blue"
  },
  {
    id: 3,
    title: "Quality Guarantee",
    description: "All products are checked for quality to ensure satisfaction.",
    icon: ShieldCheck,
    color: "bg-green-500"
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our customer service team is available anytime to help you.",
    icon: Headphones,
    color: "bg-purple-500"
  }
]

export default function ServicesSection() {
  return (
    <section className="w-full min-h-screen bg-background px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto text-foreground">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
          Our <span className="text-Orange">Services</span>
        </h2>
        <p className="text-gray800 mb-12 max-w-2xl">
          Here’s what we offer to ensure the best shopping experience for our customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-gray100 rounded-xl p-6 flex flex-col items-start gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`p-4 rounded-full ${service.color} text-primaryWhite`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray400 text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
