import { NextResponse } from "next/server"

export async function GET() {
  try {
    const res = await fetch("https://template-03-api.vercel.app/api/products", {
      cache: "no-store",
      next: { revalidate: 0 },
    })

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`)
    }

    const data = await res.json()
    return NextResponse.json({ success: true, data: data.data })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
