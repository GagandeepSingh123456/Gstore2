import React, { useEffect } from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import styles from './Types.module.css';
import { useNavigate, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import img6 from '../assets/images/watches/6.png';
import sho3 from '../assets/images/shoes/3.png';
import shi4 from '../assets/images/shirts/4.png';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Types() {
  
  useEffect(()=>{
    gsap.fromTo(".hello",{
       y:200,
       opacity:0,
       },{
        y:0,
        opacity:1,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
          trigger:'.typemain',
          scroller:'body',
          start:'top 50%',
        }
       }
    )
  },[])
  const navigate=useNavigate();
  const handlechange=(name)=>{
    navigate(`/${name}`)
  }

  const data=[
    {
      id:1,
      image:img6,
      name:"Watches",
      price:"Starting at  ",
      span:"999.0",
    },
    {
      id:2,
      image:sho3,
      name:"Shoes",
      price:"Starting at  ",
      span:"1999.0",
    },
    {
      id:3,
      image:shi4,
      name:"Shirts",
      price:"Starting at  ",
      span:"599.0",
    },

  ]
  return (
    <div className={`typemain ${styles.typemain}  w-full  flex items-center justify-center flex-wrap font-serif gap-6`}>
      {
        data.map((item)=>(
           <div key={item.id} className={`hello ${styles.hello} relative  h-[200px] bg-zinc-300 overflow-hidden `}>
        <div className=" float-right w-[60%] h-full border-3 border-zinc-800 ">
        <img className={`${styles.helloimg} w-full h-full object-fill  transition-all duration-300 ease-linear`} src={item.image} alt="" />
        </div>
        
        <div className="absolute h-full w-[50%] flex flex-col   top-0 pt-10 pl-5">
          <h1 className='text-4xl font-bold text-orange-800'>{item.name}</h1>
          <h2 className='text-xl'>{item.price}<span className='text-orange-800'>{item.span}</span></h2>
          <button onClick={()=>handlechange(item.name)}  className={`${styles.hellobtn} border-2 border-orange-800 w-9 h-9 flex items-center justify-center rounded-full text-orange-800 text-3xl mt-10`}><MdArrowRightAlt /></button>
        </div>
      </div>
        ))
      }
     
    </div>
  )
}

export default Types