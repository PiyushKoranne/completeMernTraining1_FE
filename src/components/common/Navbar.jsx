import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='bg-white shadow-md  py-[15px] px-[50px] border-b-[4px] border-b-themecol'>
            <div className='center-wr'>
                <div className='flex items-center justify-between'>
                    <figure onClick={()=>{navigate("/")}} className='w-[100px]'>
                        <img src="/logo.png" alt="" />
                    </figure>
                    <div className='text-[16px] flex items-center gap-[40px] font-semibold'>
                        <Link className='nav-item uppercase tracking-[1.2px]' to={"/"}>Products</Link>
                        <Link className='nav-item uppercase tracking-[1.2px]' to={"/"}>Offers</Link>
                        <Link className='nav-item uppercase tracking-[1.2px]' to={"/"}>About</Link>
                        <Link className='nav-item uppercase tracking-[1.2px]' to={"/"}>Contact</Link>
                        <Link to={"/"} className='ml-[50px] flex items-center justify-center w-[40px] h-[40px] border-[2px] border-transparent hover:border-themecol rounded-full transition-all'>
                            <FiShoppingCart className='text-[20px]' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
