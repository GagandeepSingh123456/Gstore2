import React from 'react';
import styles from './Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import img4 from '../assets/images/watches/4.png'
import sho4 from '../assets/images/shoes/4.png'
import shi7 from '../assets/images/shirts/7.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

function Home() {
  useGSAP(()=>{
    var tl=gsap.timeline();
    tl.from(".homedata",{
      x:-600,
      duration:1.2,
      opacity:-10,
      stagger:0.2
    });
    tl.from(".homeimg",{
      y:100,
      duration:1,
      opacity:0,
    })
  })
  const data=[
    {
      image:sho4,
      sale:"Sale off 20%",
      name:"Summer Offer 2024 Collection",
      color:"bg-gray-300"
    },
    {
      image:img4,
      sale:"Sale off 20%",
      name:"Summer Offer 2024 Collection",
      color:"bg-orange-300"
    },
    {
      image:shi7,
      sale:"Sale off 20%",
      name:"Summer Offer 2024 Collection",
      color:"bg-green-300"
    },
  ]
  return (
    <div className={`${styles.onemain} w-full z-0`}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  h-full items-center text-center"
      >
        {
          data.map((item,index)=>(
            <SwiperSlide className={`${styles.one} -z-50 `} key={index}>
          <div key={index} className={`absolute w-full h-full  z-0 ${item.color} -z-50`}>
            <img className={`homeimg ${styles.homeimg}  h-[100%] float-right`} src={item.image} alt="" />
          </div>
          <div className={`homedata ${styles.homedata}   h-full  z-10 bg-none`}>
            <h2 className='text-3xl font-bold text-zinc-500'>{item.sale}</h2>
            <h1 className='text-7xl tracking-wide leading-[90px] mt-5'>{item.name}</h1>
            <button className={`relative ${styles.onebtn} w-fit border-2 px-10 py-5 text-lg mt-12 bg-zinc-300 `}>Shop Now</button>
          </div>
        </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Home