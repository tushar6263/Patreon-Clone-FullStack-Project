import React from 'react'

const Username = ({params}) => {
  return (
    <>
    <div className='cover w-full relative bg-red-50 '>
      <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/971275/e81e9167015c466486e62f3ccbd2e912/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/1.jpg?token-time=1738627200&token-hash=2kN9IWDGCf-CmfrPq7H6urHLB570fmkS7KWkqY7CCL4%3D" alt="" />
      <div className=' -bottom-10 right-[48%] absolute '>
        <img width={80} height={80} className=' border-white border-2 rounded-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/971275/2406ebe9b7cf44fe9059249e573f8aa7/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/1.jpg?token-time=1739145600&token-hash=YJJ4kgJqbHW5N5R3zR3ooHtHchb3yEsi7qIV3g6j3dM%3D" alt="" />
      </div>
    </div>
    <div className=" flex justify-center items-center my-12">
    @{params.username}
    </div>
  </>
  )
}

export default Username
