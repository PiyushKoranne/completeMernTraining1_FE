import React from 'react'
import { useNavigate } from 'react-router-dom'


function ProductCard({data}) {
  const navigate = useNavigate();


  return (
    <div onClick={()=>{navigate(`/product/${data._id}`)}} className='border-[2px] border-slate-900 flex flex-col items-center justify-center p-[20px] w-[320px] hover:bg-slate-100 transition-all duration-300 cursor-pointer'>
      <figure className='w-[220px] h-[220px] overflow-hidden'>
        <img src={`http://localhost:4000/${data.productImage}`} alt="" />
      </figure>
      <h3 className='text-[20px] font-semibold'>{data.productName}</h3>
      <div className='flex items-center justify-between w-full mt-[15px] px-[20px]'>
        <p>₹ {data.price}</p>
        <button className='px-[20px] py-[10px] bg-slate-900 text-white'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
