"use client"
import React from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useraction'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
  //const { data:session } =useSession()

  const [Paymentform, setPaymentform] = useState({})

  const handleChange = (e) => {
    setPaymentform({ ...Paymentform, [e.target.name]: e.target.value })
  }

  const pay = async (amount) => {
    // Get the order Id
    let a = await initiate(amount,username, Paymentform)
    let orderId = a.id
    var options = {
      "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Get Me A Chai", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();

  }
  return (
    <>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>


      <div className='cover w-full relative bg-red-50 '>
        <img className='object-cover  w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/971275/e81e9167015c466486e62f3ccbd2e912/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/1.jpg?token-time=1738627200&token-hash=2kN9IWDGCf-CmfrPq7H6urHLB570fmkS7KWkqY7CCL4%3D" alt="" />
        <div className=' -bottom-10 right-[47%] absolute '>
          <img width={80} height={80} className=' border-white border-2 rounded-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/971275/2406ebe9b7cf44fe9059249e573f8aa7/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/1.jpg?token-time=1739145600&token-hash=YJJ4kgJqbHW5N5R3zR3ooHtHchb3yEsi7qIV3g6j3dM%3D" alt="" />
        </div>
      </div>
      <div className=" info flex justify-center items-center my-12  flex-col gap-2">
        <div className="font-bold text-lg">

          @{username}
        </div>
        <div className='text-white opacity-60'>
          creating documentaries, research-based video content etc..
        </div>
        <div className='text-white opacity-60'>
          928 members . 125 posts . $15,324/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-7">
          <div className="supporters w-1/2 rounded-lg bg-neutral-900 text-white p-10">
            <h2 className='text-2xl font-bold my-5 '>Supporters</h2>
            <ul className='mx-3'>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="" />
                <span>
                  Tushar donated <span className='font-bold'>$33 </span>with a message "I Support you bro. Lots of Love"
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="" />
                <span>
                  Tushar donated <span className='font-bold'>$33 </span>with a message "I Support you bro. Lots of Love"
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="" />
                <span>
                  Tushar donated <span className='font-bold'>$33 </span>with a message "I Support you bro. Lots of Love"
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="" />
                <span>
                  Tushar donated <span className='font-bold'>$33 </span>with a message "I Support you bro. Lots of Love"
                </span>
              </li>



            </ul>
          </div>

          <div className="makePayment w-1/2 rounded-lg bg-neutral-900 text-white p-10">
            <h2 className='text-2xl font-bold my-5 '>Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              {/* input for name and message */}
              <input onChange={handleChange} value={Paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-neutral-800' placeholder='Enter Name' />
              <input onChange={handleChange} value={Paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-neutral-800' placeholder='Enter Message' />


              <input onChange={handleChange} value={Paymentform.amount} name="amount" type="text" className='w-full p-3 rounded-lg bg-neutral-800' placeholder='Enter Amount' />
              <button
                type="button"
                className="  text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Pay
              </button>
            </div>
            {/*Or choose from these amounts*/}
            <div className='flex gap-2 mt-5'>
              <button className='bg-neutral-800 rounded-lg p-3 ' onClick={() => pay(1000)}>Pay ₹10</button>
              <button className='bg-neutral-800 rounded-lg p-3 ' onClick={() => pay(2000)}>Pay ₹20</button>
              <button className='bg-neutral-800 rounded-lg p-3 ' onClick={() => pay(5000)}>Pay ₹50</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage
