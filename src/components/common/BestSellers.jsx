import React from 'react'
import ProductCard from './ProductCard'

function BestSellers() {
    return (
        <section className='my-[100px]'>
            <div className='flex flex-col items-center justify-center w-full'>
                <h2 className='text-[35px] font-bold '>Our <span className='text-themecol'>Best Selling</span> Products</h2>
                <div className='my-[25px] flex items-center gap-[50px]'>
                    <ProductCard productId={"tshirt"} />
                    <ProductCard productId={"jeans"} />
                    <ProductCard productId={"jacket"} />
                </div>
            </div>
        </section>
    )
}

export default BestSellers
