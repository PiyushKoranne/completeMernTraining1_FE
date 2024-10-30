import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from "axios";

function BestSellers() {

    const [products, setProducts] = useState([]);

    async function getProducts() {
        try {
            const response = await axios.get("http://localhost:4000/products/get-all-products");
            if(response.status === 200) {
                setProducts(response.data.allProducts);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
       getProducts();
    },[])

    return (
        <section className='my-[100px]'>
            <div className='flex flex-col items-center justify-center w-full'>
                <h2 className='text-[35px] font-bold '>Our <span className='text-themecol'>Best Selling</span> Products</h2>
                <div className='my-[25px] flex items-center gap-[50px]'>
                    {
                        products.map(item => <ProductCard data={item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default BestSellers
