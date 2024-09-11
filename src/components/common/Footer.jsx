import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcLikePlaceholder } from "react-icons/fc";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-parent-bg'>
        <div className='center-wr'>
        <div className='flex items-stretch w-full'>
        <div className='footer-bg-pattern text-white p-[40px] w-[30%]'>
            <p className='text-[14px] uppercase tracking-[1.2px] font-semibold text-white'>Links</p>
            <ul className='list-none text-[13px] text-slate-300 mt-[15px] flex flex-col gap-[5px]'>
                <li className='cursor-pointer hover:text-white transition-all duration-300'>Privacy Policy</li>
                <li className='cursor-pointer hover:text-white transition-all duration-300'>Shipping Policy</li>
                <li className='cursor-pointer hover:text-white transition-all duration-300'>Terms & Conditions</li>
            </ul>
        </div>
        <div className='bg-slate-900 w-[70%] text-white p-[40px] flex items-center justify-center flex-col'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-[14px] uppercase tracking-[1.2px] font-semibold text-white'>Social</p>
                <ul className='list-none flex items-center gap-[25px] mt-[15px]'>
                    <li className='footer-social-icons'><FaFacebook className='footer-icon text-slate-400 text-[24px]' /></li>
                    <li className='footer-social-icons'><RiInstagramFill className='footer-icon text-slate-400 text-[24px]' /></li>
                    <li className='footer-social-icons'><FaSquareXTwitter className='footer-icon text-slate-400 text-[24px]' /></li>
                </ul>
            </div>
            <div className='mt-[40px]'>
                <p className='text-[13px] text-slate-400'>Copyright {new Date().getFullYear()}, <Link className="hover:text-white" to="/">Kiran Ecommerce</Link>. All Rights Reserved.</p>

                <p className='mt-[15px] flex items-center gap-[5px] justify-center'>
                    <span>Crafted with</span>
                    <span><FcLikePlaceholder /></span>
                    <span>at Indore, India.</span>
                </p>
            </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default Footer
