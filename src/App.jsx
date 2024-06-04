import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Types from './components/Types'
import NewBest from './components/NewBest'
import NewArrival from './components/NewArrival'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Watch from './components/Watch'
import { useSelector } from 'react-redux'
import Product from './components/Product'
import Cart from './components/Cart'

function App() {
  const [one,setOne]=useState(0);
  const addEventListener=()=>{
     setOne(one+1)
  }
  const {data3}=useSelector((state)=>state.UserReducers);
  const g=data3.filter((item)=>item.latest=="new");
  const h=data3.filter((item)=>item.best=="best");
   
  return (
    <>
    <div className='w-full h-full overflow-hidden'>
      <Navbar one={one}  />
      <Routes>
        <Route path="/" element={<><Home/><Types/><NewBest/><NewArrival listener={addEventListener} value={g}  /><Blog/></>}></Route>
        {/* <Route path="/:name" element={<><NewBest/></>}></Route> */}
        <Route path="/best" element={<><Home/><Types/><NewBest/><NewArrival value={h} /><Blog/></>}></Route>

        <Route  path="/:name"  element={<Watch />}></Route>
        <Route path="/:name/:id" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App