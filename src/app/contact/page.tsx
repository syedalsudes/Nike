"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-12 py-12">
      <div className="w-full max-w-4xl bg-background rounded-2xl p-8 md:p-12 animate-slideDown text-foreground"
        style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Contact <span className="text-Orange">Us</span>
        </h2>
        <p className="text-gray400 mb-10">
          Got questions or want to reach out? Here's how you can contact us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray400">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-Orange" />
            <span>contact@Nike.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-Orange" />
            <span>+307 20 9111 08</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-Orange" />
            <span>New york, US</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-Orange" />
            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
          </div>
        </div>

      </div>
    </section>
  )
}
