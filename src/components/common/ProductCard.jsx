import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({productId}) {
  const navigate = useNavigate()
  return (
    <div onClick={()=>{navigate(`/product/${productId}`)}} className='border-[2px] border-slate-900 flex flex-col items-center justify-center p-[20px] w-[320px] hover:bg-slate-100 transition-all duration-300 cursor-pointer'>
      <figure className='w-[220px]'>
        <img src="/dummy-bag.png" alt="" />
      </figure>
      <h3 className='text-[20px] font-semibold'>Product Name</h3>
      <div className='flex items-center justify-between w-full mt-[15px] px-[20px]'>
        <p>₹ 5000</p>
        <button className='px-[20px] py-[10px] bg-slate-900 text-white'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
