import React from 'react'

function Cart() {
  return (
    <div>
      <div className='center-wr'>
        <div className='flex flex-col py-[50px]'>
            <div className='text-center text-[24px] 
            '>Your Cart</div>
            <div className='relative border-b-[2px] flex items-center gap-[20px] p-[10px]'>
                <figure className='w-[80px]'>
                    <img src="/dummy-bag.png" alt="" />
                </figure>
                <p className='text-[20px]'>Levi's Denim Jacket</p>
                <p className='text-[20px]'>Qty:2</p>
                <button className='absolute right-[10px] border-2 border-slate-600 uppercase text-[14px] px-[14px] font-semibold py-[5px]'>Remove</button>
            </div>
            <div className='relative border-b-[2px] flex items-center gap-[20px] p-[10px]'>
                <figure className='w-[80px]'>
                    <img src="/dummy-bag.png" alt="" />
                </figure>
                <p className='text-[20px]'>Levi's Denim Jacket</p>
                <p className='text-[20px]'>Qty:2</p>
                <button className='absolute right-[10px] border-2 border-slate-600 uppercase text-[14px] px-[14px] font-semibold py-[5px]'>Remove</button>
            </div>
            <div className='relative border-b-[2px] flex items-center gap-[20px] p-[10px]'>
                <figure className='w-[80px]'>
                    <img src="/dummy-bag.png" alt="" />
                </figure>
                <p className='text-[20px]'>Levi's Denim Jacket</p>
                <p className='text-[20px]'>Qty:2</p>
                <button className='absolute right-[10px] border-2 border-slate-600 uppercase text-[14px] px-[14px] font-semibold py-[5px]'>Remove</button>
            </div>
            <div className='flex items-center justify-end mt-[15px]'>
            <button className='border-2 border-themecol bg-themecol text-white px-[30px] py-[8px] font-semibold uppercase text-[14px]'>Checkout</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

