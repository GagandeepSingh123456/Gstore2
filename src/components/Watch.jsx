import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaThLarge } from "react-icons/fa";
import { TiThSmall } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import styles from './Watch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addLikeItem } from '../store/reducers/UserReducers';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
function Watch() {
   
  useGSAP(()=>{
    var tl=gsap.timeline();
    tl.from(".main1",{
      y:500,
      duration:0.8,
      opacity:0,
      stagger:0.1
    })
  })

  



  const {pathname}=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const dispatch=useDispatch();
  const[val,setVal]=useState(false)
  const handleevent=()=>{
      setVal(true)
  }
  const handleshort=()=>{
    setVal(false)
}
const {name}=useParams();
const {data3}=useSelector((state)=>state.UserReducers);
const[popupVisible1,setPopupVisible1]=useState(false);
const d=data3.filter((item)=>item.value=="watch");
const e=data3.filter((item)=>item.value=="shoes");
const f=data3.filter((item)=>item.value=="shirt");

const [selectedOption, setSelectedOption] = useState('default');
const[sort1,setSort1]=useState(d);
const[sort2,setSort2]=useState(e);
const[sort3,setSort3]=useState(f);


// useEffect(() => {
//   setSort1([...d]);
// }, [d]);
useEffect(() => {
  let sortedArray1 = [...d];
  if (selectedOption === 'lowtohigh') {
    sortedArray1.sort((a, b) => a.price1 - b.price1);
  } else if (selectedOption === 'hightolow') {
    sortedArray1.sort((a, b) => b.price1 - a.price1);
  }
  setSort1(sortedArray1);
}, [selectedOption]);
useEffect(() => {
  let sortedArray2 = [...e];
  if (selectedOption === 'lowtohigh') {
    sortedArray2.sort((a, b) => a.price1 - b.price1);
  } else if (selectedOption === 'hightolow') {
    sortedArray2.sort((a, b) => b.price1 - a.price1);
  }
  setSort2(sortedArray2);
}, [selectedOption]);
useEffect(() => {
  let sortedArray3 = [...f];
  if (selectedOption === 'lowtohigh') {
    sortedArray3.sort((a, b) => a.price1 - b.price1);
  } else if (selectedOption === 'hightolow') {
    sortedArray3.sort((a, b) => b.price1 - a.price1);
  }
  setSort3(sortedArray3);
}, [selectedOption]);

const handleSortChange = (e) => {
  setSelectedOption(e.target.value);
};


const navigate=useNavigate();
const handleMove=(id)=>{
  console.log(name)
   navigate(`/${name}/${id}`)
}

const handlehihi=(item)=>{
  dispatch(addLikeItem(item));
  setPopupVisible1(true);
    setTimeout(() => {
      setPopupVisible1(false);
    }, 2000);
}

const getData=()=>{
  switch(name){
    case 'Watches':
      return (
         sort1.map((item,index)=>(
              <div key={index} className={`main1 ${val ? "w-[32.4%] h-[450px]":"w-[24%] h-[400px]"} ${styles.main1} w-[291px] border-2 border-zinc-100`}>
            <div className={`${styles.main} relative w-full h-[80%] border-2  overflow-hidden `}>
              <img className='w-full h-full object-fit' src={item.image1} alt="" />
              <img className='w-full h-full object-fit' src={item.image2} alt="" />
              <div className={`${styles.mainchild} absolute w-full h-14  bottom-[0px] flex items-center justify-between gap-[0.8px] `}>
                <button onClick={()=>handlehihi(item)} className=' h-[100%] w-[22%]  flex items-center justify-center text-xl bg-pink-600 text-white'><CiHeart/></button>
                <button onClick={()=>handleMove(item.id)} className=' h-[100%] w-[65%] bg-pink-600 text-white'>Select Option</button>
                <button onClick={()=>handleMove(item.id)} className=' h-[100%] w-[22%] flex items-center justify-center text-xl bg-pink-600 text-white'><FaRegEye/></button>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-1">
              <h1 className='text-xl'>{item.name}</h1>
              <h2>{item.star}</h2>
              <h2>Rs {item.price1} -  <span className='text-pink-500 line-through'>{item.price2}</span></h2>
            </div>
          </div>
            ))
      )
      case "Shoes":
        return (
          sort2.map((item,index)=>(
            <div key={index} className={`main1 ${val ? "w-[32.4%] h-[450px]":"w-[24%] h-[400px]"} ${styles.main1} w-[291px] border-2 border-zinc-100`}>
          <div className={`${styles.main} relative w-full h-[80%] border-2 overflow-hidden`}>
            <img className='w-full h-full object-fit' src={item.image1} alt="" />
            <img className='w-full h-full object-fit' src={item.image2} alt="" />
            <div className={`${styles.mainchild} absolute w-full h-14  bottom-[0px] flex items-center justify-between gap-[0.8px] `}>
              <button onClick={()=>handlehihi(item)} className=' h-[100%] w-[22%]  flex items-center justify-center text-xl bg-pink-600 text-white'><CiHeart/></button>
              <button onClick={()=>handleMove(item.id)} className=' h-[100%] w-[65%] bg-pink-600 text-white'>Select Option</button>
              <button onClick={()=>handleMove(item.id)} className=' h-[100%] w-[22%] flex items-center justify-center text-xl bg-pink-600 text-white'><FaRegEye/></button>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-1">
            <h1 className='text-xl'>{item.name}</h1>
            <h2>{item.star}</h2>
            <h2>Rs {item.price1} -  <span className='text-pink-500 line-through'>{item.price2}</span></h2>
          </div>
        </div>
          ))
        )
        case "Shirts":
          return (
            sort3.map((item,index)=>(
              <div key={index} className={`main1 ${val ? "w-[32.4%] h-[450px]":"w-[24%] h-[400px]"} ${styles.main1} w-[291px] border-2 border-zinc-100`}>
            <div className={`${styles.main} relative w-full h-[80%] border-2 overflow-hidden`}>
              <img className='w-full h-full object-fit' src={item.image1} alt="" />
              <img className='w-full h-full object-fit' src={item.image2} alt="" />
              <div className={`${styles.mainchild} absolute w-full h-14  bottom-[0px] flex items-center justify-between gap-[0.8px] `}>
                <button onClick={()=>handlehihi(item)} className=' h-[100%] w-[22%]  flex items-center justify-center text-xl bg-pink-600 text-white'><CiHeart/></button>
                <button onClick={()=>handleMove(item.id)} className=' h-[100%] w-[65%] bg-pink-600 text-white'>Select Option</button>
                <button onClick={()=>handleMove(item.id)} className=' h-[100%] w-[22%] flex items-center justify-center text-xl bg-pink-600 text-white'><FaRegEye/></button>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-1">
              <h1 className='text-xl'>{item.name}</h1>
              <h2>{item.star}</h2>
              <h2>Rs {item.price1} -  <span className='text-pink-500 line-through'>{item.price2}</span></h2>
            </div>
          </div>
            ))
          )
    default:
      return "no data"
  }
}

  return (
  
    <>
    <div className='w-full min-h-screen'>
      <div className="w-full">
        <h1 className='bg-zinc-100 text-center py-8 text-lg text-gray-500'>Home / {name}</h1>
      </div>
      <div className="w-full  flex justify-center flex-col items-center">
        <div className={`${styles.defu}`}>
          <div className={`${styles.defu1}  `}>
          <select onChange={handleSortChange} value={selectedOption}  className=' p-1 border-2 border-zinc-500' name="" id="">
            <option  value="default">Default</option>
            <option value="lowtohigh">Low to Hight</option>
            <option value="hightolow">High to Low</option>
          </select>
          <select className=' p-1 border-2 border-zinc-500' name="" id="">
            <option value="">All Categories</option>
            <option value="">Men</option>
            <option value="">Women</option>
          </select>
          </div>
          <div className={`${styles.defsize} flex  text-2xl`} >
            <button onClick={handleshort}  className='hover:text-pink-600'><TiThSmall/></button>
            <button onClick={handleevent} className='hover:text-pink-600'><FaThLarge/></button>
          </div>
        </div>

        <div className={`${styles.mainhi}  gap-4 `}>
          {
           getData()
          }
          
        </div>
      </div>
      {popupVisible1 && (
        <div className="fixed bottom-10 left-10 bg-pink-500 text-white py-3 px-5 rounded-lg shadow-2xl transition-all ease-linear animate-bounce flex items-center">
        Added to Like
        </div>
      )}
    </div>
    </>

  )
}

export default Watch