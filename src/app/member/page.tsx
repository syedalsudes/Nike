"use client"

import { useState, useEffect } from "react"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"

export default function Member() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-96 border border-foreground p-6">
        <div className="text-center mb-3">
          <Image
            src="/logo.svg"
            alt="icon"
            width={20}
            height={20}
            className="mx-auto -mt-4 size-24 h-20"
            priority={true}
          />
        </div>
        <h1 className="text-lg font-bold text-center mb-3">BECOME A NIKE MEMBER</h1>
        <p className="text-gray600 text-center mb-6">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration and
          community.
        </p>
        <input
          type="text"
          placeholder="First Name"
          className="w-full border bg-background p-2 mb-4 outline-gray400 text-foreground"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full border bg-background p-2 mb-4 outline-gray400 text-foreground"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="w-full border bg-background p-2 mb-4 outline-gray400 text-foreground"
        />
        <input
          type="text"
          placeholder="Email address"
          className="w-full border bg-background p-2 mb-4 outline-gray400 text-foreground"
        />
        <div className="flex border p-2 mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="outline-none bg-background w-72 text-foreground"
          />
          <button type="button" className="ml-2 text-gray400" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <p className="text-gray600 text-center mb-4">Get a Nike Member Reward every year on your Birthday.</p>
        <select className="text-gray600 w-full border p-2 mb-4 outline-none bg-background">
          <option value="karachi">Karachi</option>
          <option value="lahore">Lahore</option>
          <option value="islamabad">Islamabad</option>
          <option value="peshawar">Peshawar</option>
        </select>
        <div className="flex justify-between mb-4 text-gray600">
          <button className="border px-10 py-2">Male</button>
          <button className="border px-10 py-2">Female</button>
        </div>
        <div className="text-center mb-6">
          <label className="text-gray600">
            <input type="checkbox" className="mr-1" />
            Sign up for Emails to get updates from Nike on Products, Offers and your Member benefits
          </label>
        </div>
        <p className="text-center text-gray600 mb-6">
          By logging in, you agree to Nike's <br />
          <a href="#" className="text-blue underline mr-1">
            Privacy Policy
          </a>
          and
          <a href="#" className="text-blue underline ml-1">
            Terms of Use.
          </a>
        </p>
        <div className="text-center mb-4">
          <button className="bg-foreground text-background px-32 py-2 rounded">JOIN US</button>
        </div>
        <h6 className="text-center text-gray600">
          Already a Member?
          <a href="/login" className="text-blue ml-1 underline">
            Sign in.
          </a>
        </h6>
      </div>
    </div>
  )
}
