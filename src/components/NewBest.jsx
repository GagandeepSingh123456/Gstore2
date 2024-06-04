import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function NewBest() {
  
 
  return (
    <div className='w-full  p-10'>
       <nav className='flex gap-4 text-xl font-bold'>
        <NavLink style={(e)=>{
          return{
            borderBottom:e.isActive ? "1px solid black":""
          }
        }}  to="/" >New Arrival</NavLink>
        <NavLink style={(e)=>{
          return{
            borderBottom:e.isActive ? "1px solid black":""
          }
        }} to="/best" >Best Sellers</NavLink>
      </nav>
    </div>
  )
}

export default NewBest