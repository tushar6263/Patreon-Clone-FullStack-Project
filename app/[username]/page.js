import PaymentPage from '@/components/PaymentPage'
import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <PaymentPage username ={params.username}/>
    </>
  )
}

export default Username
