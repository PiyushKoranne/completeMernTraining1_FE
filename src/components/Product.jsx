import React, { useEffect, useState } from 'react'
import { RiHeartLine } from 'react-icons/ri';
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom'
import BestSellers from './common/BestSellers';

function Product() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);

    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    },[])

  return (
    <div>
      <div className='center-wr'>

        <div className='flex items-stretch mt-[55px]'>
            <div className='w-[50%] py-[40px] p-[50px] flex flex-col items-center jsutify-center border-r-[2px] '>
                <figure className='p-[10px] py-[40px] border-2 border-slate-600'>
                    <img src="/dummy-bag.png" alt="" />
                </figure>
                <div className='mt-[15px] w-full flex items-center justify-between'>
                    <div className='flex items-center gap-[5px]'>
                        <LiaStarSolid className='text-amber-500 text-[24px]' />
                        <LiaStarSolid className='text-amber-500 text-[24px]' />
                        <LiaStarSolid className='text-amber-500 text-[24px]' />
                        <LiaStarSolid className='text-amber-500 text-[24px]' />
                        <LiaStarSolid className='text-slate-500 text-[24px]' />
                    </div>
                    <IoMdHeartEmpty className='text-[22px] text-slate-600 border-2 border-slate-400 rounded-full w-[40px] h-[40px] flex items-center justify-center p-[7px]' />
                </div>
            </div>
            <div className='w-[50%] p-[50px] flex flex-col border-2 border-red-500 relative overflow-hidden'>
                <div className='absolute bg-green-600 text-white w-[100px] h-[100px] top-0 right-0 flex items-end justify-center uppercase'>24% off</div>

                <h2 className='text-[32px] font-bold'>Levi's Denim Jacket</h2>
                <p className='mt-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse expedita, et quasi nostrum nisi ab molestias.</p>
                <p className='my-[25px] text-[24px] font-semibold flex items-center gap-[10px]'>₹{4500}
                </p>
                <div className='flex items-stretch '>
                    <span onClick={()=>{setQuantity(prev=>{if(prev === 1) {return 1} else {return prev-1;}})}} className='hover:bg-slate-100 cursor-pointer flex items-center justify-center w-[40px] h-[40px] border-[2px] border-slate-600'>
                        <FaMinus className='text-[18px]' />
                    </span>
                    <span className='flex items-center justify-center text-[20px] w-[80px] h-[40px] border-t-[2px] border-b-[2px] border-slate-600'>{quantity}</span>
                    <span onClick={()=>{setQuantity(prev=>prev+1)}} className='hover:bg-slate-100 cursor-pointer flex items-center justify-center w-[40px] h-[40px] border-[2px] border-slate-600'>
                        <FaPlus className='text-[18px]' />
                    </span>
                </div>
                <div className='mt-[35px] flex items-center gap-[15px]'>
                    <button className='border-2 border-themecol bg-themecol text-white px-[30px] py-[8px] font-semibold uppercase text-[14px]'>Buy Now</button>
                    <button onClick={()=>{navigate("/cart")}} className='border-2 border-slate-600 px-[30px] py-[8px] font-semibold uppercase text-[14px]'>Add To Cart</button>
                </div>
            </div>
        </div>

      </div>
      <BestSellers />
    </div>
  )
}

export default Product
