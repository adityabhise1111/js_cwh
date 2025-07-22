import PaymentPage from '@/components/PaymentPage'
import React from 'react'


const username = ({ params }) => {
  return (
    <>
      <PaymentPage username={params.username} />
    </>
  )
}

export default username