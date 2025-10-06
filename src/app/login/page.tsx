"use client"

import { useState, useEffect } from "react"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-96 border border-foreground p-6">
        <div className="text-center mb-3">
          <Image
            src="/logo.svg"
            width={20}
            height={20}
            alt="icon"
            className="mx-auto -mt-4 size-24 h-20"
            priority={true}
          />
        </div>
        <h1 className="text-lg font-bold text-center mb-6">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
        <input type="text" placeholder="Email address" className="w-full border p-2 mb-4 outline-none bg-background" />
        <div className="flex border p-2 mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="outline-none w-72 bg-background"
          />
          <button type="button" className="ml-2 text-gray400" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="flex items-center mb-4 text-gray600">
          <input type="checkbox" className="mr-2" />
          <span>Remember me</span>
          <a href="#" className="ml-auto underline text-blue">
            Forgot your password?
          </a>
        </div>
        <p className="text-gray600 text-center mb-6">
          By logging in, you agree to Nike's
          <a href="#" className="underline text-blue mr-1">
            {" "}
            <br />
            Privacy Policy
          </a>
          and
          <a href="#" className="underline text-blue ml-1">
            Terms of Use.
          </a>
        </p>
        <button className="w-full bg-foreground text-background py-2 rounded">SIGN IN</button>
        <h6 className="text-center text-gray600 mt-4">
          Not a Member?
          <a href="/member" className="underline text-blue ml-1">
            Join Us.
          </a>
        </h6>
      </div>
    </div>
  )
}
