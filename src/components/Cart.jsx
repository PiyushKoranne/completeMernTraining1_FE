import React, { useContext, useEffect, useState , useReducer} from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios";
import { CartContext } from '../App'

const data = {
  tshirt: {
    name: "Red Color TShirt",
    description: "this is a red colored cotton tshirt wow so nice tshirt",
    price: 1000,
    discount: 25,
  },
  jeans: {
    name: "Levis Jeans Denim",
    description: "Such good jeans wow mazaa aagya",
    price: 2000,
    discount: 10,
  },
  jacket: {
    name: "Black Leather Jacket",
    description: "Very nice jacket, so cool chhapri jacket wow!",
    price: 5000,
    discount: 15,
  },
}

// State ke maamle me: localStorage maha nalayak hai, isiliye global context state banaya, useContext hook ki madad se. Parantu, global context bhi nalayak hojaata hai agar data zyada ho yahi se redux ka janam hota h


function Cart() {

  const [cart, setCart] = useState([])
  ;

  async function fetchCart() {
    try {
      const response = await axios.get("http://localhost:4000/get-cart-items");
      setCart(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  } 
  useEffect(()=>{
    fetchCart()
  },[])


  return (
    <div>
      <div className='center-wr'>
        <div className='flex flex-col py-[50px]'>
            <div className='text-center text-[24px] 
            '>Your Cart</div>
            { (Array.isArray(cart) && cart.length > 0) &&  cart.map(item => (
              <div key={item.id} className='relative border-b-[2px] flex items-center gap-[20px] p-[10px]'>
              <figure className='w-[80px]'>
                  <img src="/dummy-bag.png" alt="" />
              </figure>
              <p className='text-[20px]'>{item?.productName}</p>
              <p className='text-[20px]'>Qty:{item?.quantity}</p>
              <button className='absolute right-[10px] border-2 border-slate-600 uppercase text-[14px] px-[14px] font-semibold py-[5px]'>Remove</button>
          </div>
            ))}
            <div className='flex items-center justify-end mt-[15px]'>
            <button className='border-2 border-themecol bg-themecol text-white px-[30px] py-[8px] font-semibold uppercase text-[14px]'>Checkout</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

