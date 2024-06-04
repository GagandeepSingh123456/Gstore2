import React, { useEffect, useState } from 'react';
import styles from './NewArrival.module.css';
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { setCartItem, addLikeItem } from '../store/reducers/UserReducers';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function NewArrival({value}) {
 
  // useGSAP(()=>{
  //   var tl=gsap.timeline();
  //   tl.from(".main",{
  //     x:-400,
  //     duration:1,
  //     opacity:0,
  //     stagger:0.2,
  //   })
  // });

  useEffect(()=>{
    gsap.fromTo(".main",{
      x:-400,
      duration:1,
      opacity:0,
    },{
      x:0,
      opacity:1,
      duration:1,
      stagger:0.2,
      scrollTrigger:{
        trigger:'.main',
        scroller:'body',
        start:'top 80%'
      }
    })
  })
  

  const navigate=useNavigate();
  const [popupVisible, setPopupVisible] =useState(false);
  const[popupVisible1,setPopupVisible1]=useState(false);
  const dispatch=useDispatch();
  const handleMove=(id)=>{
     navigate(`/Watches/${id}`)
     console.log(value)
  }
  const handleCart=(e)=>{
    dispatch(setCartItem(e));
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 2000);
  }
  const handlehihi=(item)=>{
    dispatch(addLikeItem(item));
    setPopupVisible1(true);
      setTimeout(() => {
        setPopupVisible1(false);
      }, 2000);
  }
  return (
    <div className='w-full'>
      <div className=" w-full h-auto  mt-2 py-5 flex items-center justify-center flex-wrap gap-5 flex-wrap">
         {
           value.map((item,index)=>(
              <div className={`main ${styles.main} relative  overflow-hidden`} key={index}>
              <h1 className='absolute z-10 left-2 top-1 text-pink-600'>{item.off}</h1>
              <h1 className='absolute z-10 right-2 top-1 text-purple-600'>{item.latest} {item.best}</h1>
              <div className="absolute  z-10 top-[35%] left-[50%] translate-x-[-50%] flex gap-4 text-white">
                <button onClick={()=>handleCart(item)} className={`${styles.mainbtn} bg-pink-500 p-4 rounded-full`}><FaCartShopping/></button>
                <button onClick={()=>handleMove(item.id)} className={`${styles.mainbtn} bg-purple-500 p-4 rounded-full`}><FaEye/></button>
              </div>
          <div className={`${styles.child} relative w-full`}>
            <img src={item.image1} alt="" />
            <img src={item.image2} alt="" />
          </div>
          <div className="relative  p-2">
            <h1 className='text-lg'>{item.name}</h1>
            <button onClick={()=>handlehihi(item)} className='absolute top-3 right-2 text-2xl text-pink-600'><CiHeart/></button>
            <h2 className='text-md'>Rs {item.price1} - <span className='text-pink-600 line-through'>{item.price2}</span></h2>
          </div>
        </div>
          ))
         }
      
        
      </div>
      {popupVisible && (
        <div className="fixed bottom-10 left-10 bg-green-500 text-white py-3 px-5 rounded-lg shadow-2xl transition-all ease-linear animate-bounce flex items-center">
        Added to Cart
        </div>
      )}
       {popupVisible1 && (
        <div className="fixed bottom-10 left-10 bg-pink-500 text-white py-3 px-5 rounded-lg shadow-2xl transition-all ease-linear animate-bounce flex items-center">
        Added to Like
        </div>
      )}
    </div>
  )
}

export default NewArrival