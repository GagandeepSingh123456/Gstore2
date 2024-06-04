import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Product.module.css';
import { setCartItem } from '../store/reducers/UserReducers';
import { TiTick } from "react-icons/ti";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

function Product() {

  useGSAP(()=>{
    gsap.from(".proimg img",{
      x:-500,
      duration:1,
      opacity:0,
      stagger:0.2,
    });
    gsap.from(".prodiv",{
      x:500,
      duration:1,
      opacity:0,
    })
  })


  const dispatch=useDispatch();
  const {id}=useParams();
  const {data3}=useSelector((state)=>state.UserReducers);
const product=data3.find((e)=>e.id== id)
const[img,setImg]=useState(product.image1);
const [popupVisible, setPopupVisible] = useState(false);

const handleChange=(e)=>{
   setImg(e.target.src)
}
const handleCart=(e)=>{
    dispatch(setCartItem(e));
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 2000);
}
  return (
   <div className='w-full min-h-screen overflow-hidden'>
    <div className="w-full">
        <h1 className='bg-zinc-100 text-center py-8 text-lg text-gray-500'>Home / {product.name}</h1>
        <div className={`${styles.promain} w-full  flex items-center justify-center flex-wrap `}>
          <div className={`${styles.proimg} proimg  border-2  flex justify-start flex-col gap-3`}>
            <img className=' w-full h-[73%] bg-zinc-100' src={img} alt="" />
            <div className="w-full h-[27%] flex justify-between">
            <img onClick={handleChange} className='w-[32%] h-full bg-zinc-100' src={product.image1} alt="" />
            <img onClick={handleChange} className='w-[32%] h-full bg-zinc-100' src={product.image2} alt="" />
            <img onClick={handleChange} className='w-[32%] h-full bg-zinc-100' src={product.image1} alt="" />
            </div>
          </div>
          <div  className={`${styles.prodiv} prodiv `}>
            <h1 className='text-3xl tracking-wider '>{product.name}</h1>
            <h2 className='text-2xl text-red-600 '>Rs. {product.price1} <span className='text-xl text-zinc-500 mx-5 line-through'>Rs. {product.price2}</span></h2>
            <h2>{product.star}</h2>
            <p className=' text-xl mr-16 tracking-wide border-b-2'>{product.data}</p>
            <div className="flex gap-5 mt-7">
            <div className={`${styles.color}`}>
              <h1 className='font-bold mb-3'>Color</h1>
              <button className='w-4 h-4 rounded-full bg-white border-2 border-black mr-2'></button>
              <button className='w-4 h-4 rounded-full bg-black border-2 mr-2'></button>
              <button className='w-4 h-4 rounded-full bg-red-700 border-2 mr-2'></button>
            </div>
            <div className={`${styles.size}`}>
              <h1 className='font-bold mb-3'>Size</h1>
              <button className=' bg-zinc-200 mr-2 text-xs p-2'>X</button>
              <button className=' bg-zinc-200 mr-2 text-xs p-2'>M</button>
              <button className=' bg-zinc-200 mr-2 text-xs p-2'>XL</button>
              <button className=' bg-zinc-200 mr-2 text-xs p-2'>XXL</button>
            </div>
            </div>
            <button onClick={()=>handleCart(product)} className='mt-10 bg-zinc-700 text-white py-5 px-7 font-bold mr-2'>ADD TO CART</button>
            <button className='mt-10 bg-zinc-700 text-white py-5 px-6 font-bold'>H</button>
            <h2 className='text-lg mt-7 tracking-widest'>Categories: men fashion</h2>
            <h2 className='text-lg  tracking-widest'>Tags: fashion men watches</h2>
          </div>
        </div>
      </div>
      {popupVisible && (
        <div className="fixed bottom-10 left-10 bg-green-500 text-white py-3 px-5 rounded-lg shadow-2xl transition-all ease-linear animate-bounce flex items-center">
        Added to Cart
        </div>
      )}
   </div>
  )
}

export default Product