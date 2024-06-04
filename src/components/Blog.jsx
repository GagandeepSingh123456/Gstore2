import React from 'react'
import styles from './Blog.module.css';
import blo1 from '../assets/images/blog/1.jpg';
import blo2 from '../assets/images/blog/2.jpg';
import blo3 from '../assets/images/blog/3.jpg';

function Blog() {
  const data=[
    {
      image:blo1,
      name:"A guide to latest trend",
    },
    {
      image:blo2,
      name:"Five ways to lead a happy life",
    },
    {
      image:blo3,
      name:"Tips on having a happy life",
    },
  ]
  return (
    <div className={`${styles.main} w-full b py-10`}>
      <h1 className={`${styles.mainh1} relative text-3xl uppercase text-center font-bold`}>Our Blog</h1>
      <div className="w-full flex items-center justify-center flex-wrap gap-6 pt-12 pb-12">
        {
          data.map((item,index)=>(
            <div key={index} className={`${styles.blogg} relative   transition-all duration-500 flex justify-center items-center`}>
              <h1 className='absolute z-10 top-2 left-3 bg-purple-500 text-white px-2'>Lifestyle</h1>
        <div className="w-full h-full overflow-hidden"><img className='w-full h-full hover:scale-125 transition-all duration-500' src={item.image} alt="" /></div>
        
        <div className="absolute w-[85%] h-[35%]  bg-white bottom-[-35px] flex items-center justify-center flex-col px-20 text-center">
          <h1 className='text-2xl font-medium'>{item.name}</h1>
          <i className='mt-3 text-gray-500'>By Admin</i>
        </div>
       </div>
          ))
        }
       
      </div>

    </div>
  )
}

export default Blog