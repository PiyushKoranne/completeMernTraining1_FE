import React, { useEffect, useState } from 'react'
import { RiHeartLine } from 'react-icons/ri';
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom'
import BestSellers from './common/BestSellers';
import axios from "axios";

function Product() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);

    async function getProduct() {
      try {
        const response = await axios.get(`http://localhost:4000/products/get-product-by-id?pid=${id}`);
        if(response.status === 200) {
          setProduct(response.data.product);
        }
      } catch (error) {
        console.log(error);
      }
    }

    async function handleAddToCart(id, quantity) {
      try {
        const response = await axios.post("http://localhost:4000/cart/add-item", {
          productName: data[id].name,
          quantity,
          price: data[id].price,
        }, {
          headers:{
            "Content-Type":"application/json"
          }
        });
        if(response.status === 200) {
          navigate("/cart");
        }
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      getProduct();
    },[])

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
                <figure className='p-[10px] py-[40px] w-full h-[450px] border-2 border-slate-600'>
                    <img src={`http://localhost:4000/${product?.productImage}`} className='w-full h-full' alt="" />
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
            <div className='w-[50%] p-[50px] flex flex-col relative overflow-hidden'>
                <div className='absolute bg-gradient-to-b to-sky-600 from-sky-400 text-white w-[150px] h-[100px] top-[-35px] right-[-59px] flex items-end justify-center uppercase rotate-[45deg] pb-[5px] font-semibold text-[18px]'>{product?.discount}% off</div>

                <h2 className='text-[32px] font-bold'>{product?.productName}</h2>
                <p className='mt-[15px]'>this is a dummy description</p>
                <p className='my-[25px] text-[24px] font-semibold flex items-center gap-[10px]'>₹{product?.price * ((100-product?.discount) / 100)} <span className='line-through text-[18px] text-slate-600 block'>₹{product?.price}</span>
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
                    <button onClick={()=>{handleAddToCart(id, quantity)}} className='border-2 border-slate-600 px-[30px] py-[8px] font-semibold uppercase text-[14px]'>Add To Cart</button>
                </div>
            </div>
        </div>

      </div>
      <BestSellers />
    </div>
  )
}

export default Product
