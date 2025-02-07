import React from 'react'
import StripePayment from '../components/StripePayment'

const PaymentMethod = () => {
  return (
    <div className='text-center bg-gray-500 p-20'>
      <StripePayment />
    </div>
  )
}

export default PaymentMethod;