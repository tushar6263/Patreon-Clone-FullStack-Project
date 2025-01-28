import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full relative bg-red-50 '>
        <img className='object-cover  w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/971275/e81e9167015c466486e62f3ccbd2e912/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/1.jpg?token-time=1738627200&token-hash=2kN9IWDGCf-CmfrPq7H6urHLB570fmkS7KWkqY7CCL4%3D" alt="" />
        <div className=' -bottom-10 right-[47%] absolute '>
          <img width={80} height={80} className=' border-white border-2 rounded-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/971275/2406ebe9b7cf44fe9059249e573f8aa7/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/1.jpg?token-time=1739145600&token-hash=YJJ4kgJqbHW5N5R3zR3ooHtHchb3yEsi7qIV3g6j3dM%3D" alt="" />
        </div>
      </div>
      <div className=" info flex justify-center items-center my-12  flex-col gap-2">
        <div className="font-bold text-lg">

          @{params.username}
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
            <ul className='mx-5'>
              <li className='my-2'>Tushar donated $400 with the message ""</li>
              <li className='my-2'>Tushar donated $400 with the message ""</li>
              <li className='my-2'>Tushar donated $400 with the message ""</li>
              <li className='my-2'>Tushar donated $400 with the message ""</li>
              <li className='my-2'>Tushar donated $400 with the message ""</li>
              <li className='my-2'>Tushar donated $400 with the message ""</li>
              <li className='my-2'>Tushar donated $400 with the message ""</li>

            </ul>
          </div>

          <div className="makePayment w-1/2 rounded-lg bg-neutral-900 text-white p-10">
            <h2 className='text-2xl font-bold my-5 '>Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              {/* input for name and message */}
              <input type="text" className='w-full p-3 rounded-lg bg-neutral-800' placeholder='Enter Name' />
              <input type="text" className='w-full p-3 rounded-lg bg-neutral-800' placeholder='Enter Message' />


              <input type="text" className='w-full p-3 rounded-lg bg-neutral-800' placeholder='Enter Amount' />
              <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Pay
              </button>
            </div>
            {/*Or choose from these amounts*/}
            <div className='flex gap-2 mt-5'>
              <button className='bg-neutral-800 rounded-lg p-3 '>Pay $10</button>
              <button className='bg-neutral-800 rounded-lg p-3 '>Pay $20</button>
              <button className='bg-neutral-800 rounded-lg p-3 '>Pay $50</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Username
