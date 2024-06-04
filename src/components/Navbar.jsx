import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css'
import {Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { removeLikeItem, setCartItem } from '../store/reducers/UserReducers';
import img1 from '../assets/images/watches/1.png';
import sho1 from '../assets/images/shoes/1.png';
import shi7 from '../assets/images/shirts/7.png';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
   useGSAP(()=>{
    var tl=gsap.timeline();
    tl.from(".navfirst li",{
       y:-100,
       duration:0.8,
       opacity:0,
       stagger:0.1
    });
   });
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // You can adjust the threshold
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const dispatch=useDispatch();
  const[show,setShow]=useState(false);
  const likeItem=useSelector((state)=>state.UserReducers.Like);
  const {Cart}=useSelector((state)=>state.UserReducers);
  const[popupVisible1, setPopupVisible1]=useState(false);
  const [popupVisible, setPopupVisible] =useState(false);
  const[imgg,setImgg]=useState("");

  const handleCli=()=>{
    setShow(!show);
  }
  const handleLikeRemove=(item)=>{
      dispatch(removeLikeItem(item));
      setPopupVisible1(true);
      setTimeout(() => {
        setPopupVisible1(false);
      }, 2000);
  }
  const handleEnter=(img)=>{
    setImgg(img)
  }
  const handleCart=(e)=>{
    dispatch(setCartItem(e));
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 2000);
  }

  const[hide,setHide]=useState(false);
  const handleShow=()=>{
    setHide(true);
  }
  
  const [sml,setSml]=useState(false);
  const [rot,setRot]=useState("rotate-180");
  const handleHide=()=>{
    setSml(false);
    setRot("rotate-180")
    setHide(false);
  }
  
  const handleShow2=()=>{
    if(sml==false){
      setSml(true);
      setRot("rotate-0")
    }else{
      setSml(false);
      setRot("rotate-180")
    }
      
    
  }

  return (
    <>
    
    <nav className={`navfirst ${styles.navfirst} ${isFixed ? styles.fixed : ''} relative  w-full flex items-center justify-between border-2  z-40 bg-white`}>
    
      <ul className='flex text-4xl font-bold'>
        <li>G-Store</li>
      </ul>
      <ul className={`navlink ${styles.navlink} flex text-lg gap-10 relative`}>
        <li><NavLink style={(e)=>{
          return{
            color:e.isActive ? "red":"",
          }
           
        
        }} to="/">Home</NavLink></li>
        <li><NavLink className={`navpro ${styles.navpro} relative`}>Products
        <div className={`navproduct ${styles.navproduct} absolute bg-white z-50`}>
          <NavLink to="/Watches"><h1 onMouseEnter={()=>handleEnter(img1)}>Watches</h1></NavLink>
          <NavLink to="/Shoes"><h1 onMouseEnter={()=>handleEnter(sho1)}>Shoes</h1></NavLink>
          <NavLink to="/Shirts"><h1 onMouseEnter={()=>handleEnter(shi7)}>Shirts</h1></NavLink>
          <div className={`navproimg ${styles.navproimg} absolute w-[100px] h-[100px]  top-5 right-1 `} style={{ backgroundImage: `url(${imgg})` }}>
          </div>
        </div>
        </NavLink>
       
        </li>
        <li><NavLink>About Us</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
        <li><NavLink>Contact Us</NavLink></li>
      </ul>
      <ul className='flex gap-2 text-3xl'>
        <li><NavLink><CiSearch/></NavLink></li>
        <li><NavLink><CiUser /></NavLink></li>
        <li><NavLink onClick={handleCli} className={`relative`}><CiHeart/><span className='p-1 w-5 h-5 flex items-center justify-center bg-zinc-900 rounded-full text-sm text-white absolute top-[-5px] right-[-10px]'>{likeItem.length}</span></NavLink>
        <div className={`${show  ? "absolute" : "hidden" } ${styles.likevala}   overflow-y-auto border-2  bg-white  z-10 flex flex-col p-5 rounded`}>
          { Array.isArray(likeItem) && 
          likeItem.map((item,index)=>(
              <div key={index} className="w-full   border-b-2 border-zinc-300  p-3 flex gap-2">
              <div className="w-[40%] h-[100px] ">
               <img className='w-full h-full object-cover' src={item.image1} alt="" />
              </div>
              <div className="relative w-[55%] h-[100px]  flex flex-col justify-center">
               <button onClick={()=>handleLikeRemove(item.id)} className='absolute text-sm bg-purple-500 text-white rounded-full p-1 top-0 right-[-20px]'>< RxCross2/></button>
               <h1 className='text-lg font-semibold'>{item.name}</h1>
               <h2 className='text-lg'>Rs. {item.price1}</h2>
               <button onClick={()=>handleCart(item)} className='text-xs bg-purple-500 w-fit py-1 px-2 rounded text-white'>Add To Cart</button>
              </div>
             </div>
            ))
          }
         
        </div>
        </li>
        <li><NavLink to="/cart" className='relative'><CiShoppingCart/><span className='p-1 w-5 h-5 flex items-center justify-center bg-zinc-900 rounded-full text-sm text-white absolute top-[-5px] right-[-10px]'>{Cart.length}</span></NavLink></li>
        <li onClick={handleShow}  className={`${styles.navmenu} ml-5`}><CiMenuFries/>
        </li>
      </ul>
      <div className={`absolute w-[60%] h-screen bg-white bg-zinc-100 top-0  ${hide ? "-right-0" : "-right-[60%]"} z-50 transition-all ease-linear duration-300`}>
        <h1 onClick={handleHide} className='absolute right-10 top-5 text-3xl'><RxCross1/></h1>
        <ul className='w-full  mt-28 pl-10 pt-5 text-3xl flex  flex-col gap-5'>
          <li><NavLink to="/">Home</NavLink></li>
          <li onClick={handleShow2} className='flex items-center gap-5'>Products <span className={`${rot}`}><IoIosArrowDown/></span></li>
          <ul className={`w-full text-xl pl-5 ${sml ? "block ":"hidden"} `}>
            <li><NavLink to="/Watches">Watches</NavLink></li>
            <li><NavLink to="/Shoes">Shoes</NavLink></li>
            <li><NavLink to="/Shirts">Shirts</NavLink></li></ul>
          <li>About Us</li>
          <li>Blogs</li>
          <li>Contact Us</li>
        </ul>
      </div>
      {popupVisible && (
        <div className="fixed -bottom-[1000%] left-10 bg-green-500 text-white py-3 px-5 rounded-lg shadow-2xl transition-all ease-linear animate-bounce flex items-center">
        Added to Cart
        </div>
      )}
      {popupVisible1 && (
        <div className="fixed -bottom-[1000%] bg-red-500 text-white py-3 px-5 rounded-lg shadow-2xl transition-all ease-linear animate-bounce flex items-center">
        Removed
        </div>
      )}
    </nav>
    </>
  )
}

export default Navbar