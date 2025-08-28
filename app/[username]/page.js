import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = async ({ params }) => {
  // ✅ Await params
  const { username } = await params

  await connectDb()
  let u = await User.findOne({ username }).lean() // ✅ plain object

  if (!u) {
    return notFound()
  }

  return (
    <>
      <PaymentPage username={username} />
    </>
  )
}

export default Username

// ✅ generateMetadata receives { params }
export async function generateMetadata({ params }) {
  const { username } = await params
  return {
    title: `Support ${username} - CreatorHub`
  }
}
