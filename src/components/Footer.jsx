import React from 'react';
import styles from './Footer.module.css'

function Footer() {
  const data=[
    {
      one:"ABOUT US",
      two:"About us",
      three:"Store location",
      four:"Contacts",
      five:"Order tracking",
    },
    {
      one:"USEFUL LINKS",
      two:"Return",
      three:"Support policy",
      four:"Size guide",
      five:"FAQs",
    },
    {
      one:"FOLLOW US",
      two:"Facebook",
      three:"Instagram",
      four:"Twitter",
      five:"Youtube",
    },
  ]
  return (
    <div className={`${styles.footmain} w-full bg-gray-100`}>
      <div className={`${styles.foot1}   flex flex-col justify-center `}>
        <h1 className='text-4xl font-bold'>G-Store</h1>
        <h2>2024 G-Store</h2>
        <h2>All Right Reserved</h2>
      </div>
      {
        data.map((item,index)=>(
          <div key={index} className={`${styles.foot2}   flex flex-col justify-center text-md gap-3`}>
        <h1 className='font-bold'>{item.one}</h1>
        <h2>{item.two}</h2>
        <h2>{item.three}</h2>
        <h2>{item.four}</h2>
        <h2>{item.five}</h2>
      </div>
        ))
      }
      <div className={`${styles.foot3}   flex flex-col justify-center text-md gap-3 `}>
      <h1 className='font-bold'>SUBSCRIBE</h1>
      <h2>Get E-mail updates about our latest shop and special offers.</h2>
      <input className='bg-transparent border-b-2 border-zinc-300 py-2 outline-none' type="text" placeholder='Enter your email address...' />
      <button className='text-start border-b-2 border-zinc-400 w-fit'>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default Footer