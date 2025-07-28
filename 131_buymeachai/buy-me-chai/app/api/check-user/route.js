import { NextResponse } from 'next/server'
import connectDb from '@/db/connectDB'
import User from '@/models/User'

export async function POST(req) {
  try {
    await connectDb()
    const { email } = await req.json()

    const user = await User.findOne({ email })

    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

    return NextResponse.json({
      username: user.username,
      hasRazorpayKeys: !!(user.razorpayId && user.razorpaySecret)
    })
  } catch (err) {
    console.error("Error in API:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
