import React, { useEffect, useTransition } from 'react'
import ProductCard from './common/ProductCard'
import {useNavigate} from "react-router-dom"
import BestSellers from './common/BestSellers';

function Blob() {
    return (
        <div className='fixed w-[200px] h-[200px] blob'>

        </div>
    )
}

function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        const mainParent = document.getElementById("main-parent");
        mainParent.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;
            let mouseX = clientX - mainParent.offsetLeft;
            let mouseY = clientY - mainParent.offsetTop;
            // console.log(mouseX, mouseY);
            const blob = document.querySelector(".blob");
            blob.animate({
                top:`${mouseY}px`,
                left: `${mouseX}px`
            }, {
                duration:1000,
                fill: "forwards"
            })
        })
    })
    return (
        <div id='main-parent'>
            <Blob />
            <div className='center-wr'>
                <section className='my-[50px]'>
                    <div className='flex items-stretch w-full'>
                        <figure className='w-[45%] flex items-center justify-center'>
                            <img src="/home-banner.png" alt="" />
                        </figure>
                        <div className='w-[55%] pr-[50px] pl-[50px] flex items-center justify-center flex-col'>
                            <h1 className='text-[50px] font-bold capitalize poppins-font '> All Your needs at <span className='text-themecol'>One</span> place</h1>
                            <p className='text-[18px] poppins-font leading-[30px] mt-[15px]'>Browse our products, we have a wide range of products that will cater to all youre diverse needs</p>
                            <div className='w-full pt-[25px]'>
                                <button onClick={()=>{console.log("I was clicked")}} className='rounded-[30px] bg-themecol text-white font-semibold poppins-font px-[36px] py-[15px] text-[18px] hover:bg-slate-900 transition-all duration-300'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Shopping Items in a Card Section  */}
                <BestSellers />
            </div>
        </div>
    )
}

export default Home
