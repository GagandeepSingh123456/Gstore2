import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../store/reducers/UserReducers';
import { increment,decrement } from '../store/reducers/UserReducers';

function Cart() {
 
  const dispatch=useDispatch();
  const {Cart}=useSelector((state)=>state.UserReducers);
  const d=useSelector((state)=>state.UserReducers.Cart.length);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleRemove=(item)=>{
    dispatch(removeCartItem(item));
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 2000);
  }
  const handleMinus=(item)=>{
    if (item.quantity > 1) {
      dispatch(decrement(item.id));
    }
  }
  const handlePlus=(item)=>{
   dispatch(increment(item.id));
  }
     const calculateSubtotal = (item) => {
    return item.price1 * item.quantity;
  };
  const calculateGrandTotal = () => {
    return Cart.reduce((total, item) => total + (item.price1 * item.quantity), 0);
  };
  return (
    <div className='w-full min-h-screen'>
      <div className="w-full">
        <h1 className='bg-zinc-100 text-center py-8 text-lg text-gray-500'>Home / Cart</h1>
      </div>
      <div className={`${styles.cartmain} w-full  p-5 `}>
        <div className={`${styles.cart1}  border-2    text-center`}>
          <h1 className='text-3xl'>Your Cart Items</h1>
          <table className={`${styles.table} border-2  mt-10`}>
            <tr className='border-2 bg-zinc-200 h-14'>
              <th>IMAGE</th>
              <th>PRODUCT NAME</th>
              <th>price</th>
              <th>Quantity</th>
              <th>Sub-total</th>
              <th>action</th>
            </tr>
            {Array.isArray(Cart) &&
            Cart.map((item,index)=>(
               <tr key={index} className='border-2 h-[150px] '>
               <td className=''>
                 <div className='w-full h-full p-2'>
                   <img className='w-full h-[100px] border-2 object-contain' src={item.image1} alt="" />
                 </div>
               </td>
               <td>{item.name}</td>
               <td>{item.price1}</td>
               <td>
                 <div className={`${styles.val}  flex items-center justify-center`}>
                 <h1 className='cursor-pointer' onClick={()=>handleMinus(item)}>-</h1>
                 <h1>{item.quantity}</h1>
                 <h1 className='cursor-pointer' onClick={()=>handlePlus(item)}>+</h1>
                 </div>
               </td>
               <td>{calculateSubtotal(item)}</td>
               <td ><button onClick={()=>handleRemove(item.id)}>X</button></td>
             </tr>
            ))}
           
            
          </table>
        </div>
        <div className={` ${styles.cartprice}  flex justify-center pt-10 `}>
          <div className={`${styles.parchi}  border-2 rounded-lg bg-zinc-100  flex flex-col items-center`}>
            <h1 className={`${styles.carth} relative text-2xl text-center`}>Cart Total</h1>
            <div className={`${styles.totpro} w-full  py-5 px-5 flex items-center justify-between `}>
              <h1 className='text-xl'>Total Products</h1>
              <h1>{Cart.length}</h1>
            </div>
            <div className={` ${styles.grand} w-full  py-5 px-5 flex items-center justify-between   text-purple-500 font-bold`}>
              <h1 className='text-xl '>Grand Total</h1>
              <h1>Rs. {calculateGrandTotal()}</h1>
            </div>
            <button className='w-fit bg-purple-500 py-3 px-14 text-white text-lg tracking-wide font-bold rounded-full mt-10'>Proceed To Checkout</button>
          </div>
        </div>
      </div>
      {popupVisible && (
        <div className="fixed bottom-10 left-10 bg-red-500 text-white py-3 px-5 rounded-lg shadow-2xl transition-all ease-linear animate-bounce flex items-center">
        Removed
        </div>
      )}
      </div>
  )
}

export default Cart