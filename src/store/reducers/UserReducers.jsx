import {createSlice} from "@reduxjs/toolkit";
import img1 from '../../assets/images/watches/1.png';
import img2 from '../../assets/images/watches/2.png';
import img3 from '../../assets/images/watches/3.png';
import img4 from '../../assets/images/watches/4.png';
import img5 from '../../assets/images/watches/5.png';
import sho1 from '../../assets/images/shoes/1.png';
import sho2 from '../../assets/images/shoes/2.png';
import sho3 from '../../assets/images/shoes/3.png';
import sho4 from '../../assets/images/shoes/4.png';
import sho5 from '../../assets/images/shoes/5.png';
import sho6 from '../../assets/images/shoes/6.png';
import shi1 from '../../assets/images/shirts/1.png';
import shi2 from '../../assets/images/shirts/2.png';
import shi3 from '../../assets/images/shirts/3.png';
import shi4 from '../../assets/images/shirts/4.png';
import shi5 from '../../assets/images/shirts/5.png';
import shi6 from '../../assets/images/shirts/6.png';


const initialState={

   data3:[
    {
      id:20,
      image1:img1,
      image2:img2,
      name:"Luxury Watches men",
      star:"1 1 1 1",
      price1:"599",
      price2:"799",
      latest:"new",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:21,
      image1:img4,
      image2:img5,
      name:"Luxury Watches men",
      star:"1 1 1 1",
      price1:"599",
      price2:"799",
      latest:"new",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:22,
      image1:sho2,
      image2:sho3,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"500",
      price2:" 700",
      latest:"new",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:23,
      image1:shi6,
      image2:shi1,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"500",
      price2:" 700",
      latest:"new",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:24,
      image1:shi1,
      image2:shi6,
      name:"Check Shirts men",
      star:"1 1 1 1",
      price1:"599",
      price2:"799",
      best:"best",
      off:"10%",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:25,
      image1:shi3,
      image2:shi4,
      name:"Check Shirts men",
      star:"1 1 1 1",
      price1:"599",
      price2:"799",
      best:"best",
      off:"20%",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:26,
      image1:img2,
      image2:img1,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"500",
      price2:" 700",
      best:"best",
      off:"20%",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:27,
      image1:sho1,
      image2:sho2,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"500",
      price2:" 700",
      best:"best",
      off:"20%",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:1,
      image1:img1,
      image2:img2,
      name:"Watch 1",
      star:"1 1 1 1",
      price1:"299",
      price2:" 500",
      value:"watch",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:2,
      image1:img2,
      image2:img1,
      name:"Watch 2",
      star:"1 1 1 1",
      price1:"400",
      price2:" 700",
      value:"watch",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:3,
      image1:img3,
      image2:img4,
      name:"Watch 3",
      star:"1 1 1 1",
      price1:"200",
      price2:" 400",
      value:"watch",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:4,
      image1:img4,
      image2:img3,
      name:"Watch 4",
      star:"1 1 1 1",
      price1:"700",
      price2:" 1000",
      value:"watch",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:5,
      image1:img5,
      image2:img4,
      name:"Watch 5",
      star:"1 1 1 1",
      price1:"150",
      price2:" 450",
      value:"watch",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:6,
      image1:sho1,
      image2:sho2,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"300",
      price2:" 700",
      value:"shoes",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:7,
      image1:sho2,
      image2:sho3,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"500",
      price2:" 700",
      value:"shoes",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:8,
      image1:sho3,
      image2:sho4,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"200",
      price2:" 700",
      value:"shoes",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:9,
      image1:sho4,
      image2:sho5,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"100",
      price2:" 700",
      value:"shoes",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:10,
      image1:sho5,
      image2:sho6,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"350",
      price2:" 700",
      value:"shoes",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:11,
      image1:shi1,
      image2:shi6,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"500",
      price2:" 700",
      value:"shirt",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:12,
      image1:shi2,
      image2:shi3,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"200",
      price2:" 700",
      value:"shirt",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:13,
      image1:shi4,
      image2:shi5,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"350",
      price2:" 700",
      value:"shirt",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:14,
      image1:shi6,
      image2:shi1,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"1000",
      price2:" 1200",
      value:"shirt",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
    {
      id:15,
      image1:shi3,
      image2:shi2,
      name:"Luxury Watch",
      star:"1 1 1 1",
      price1:"400",
      price2:" 700",
      value:"shirt",
      data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi harum repudiandae! Esse harum quia, rerum voluptatibus dolore doloremque excepturi molestiae maiores laborum odit et vitae, minima commodi, eaque expedita.",
    },
  ],
  Like:[],
  Cart:[],
}

export const UserSlice=createSlice({
  name:"data",
  initialState,
  reducers:{
    increment: (state, action) => {
      state.Cart = state.Cart.map((item) =>
        item.id === action.payload ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    },
    decrement: (state, action) => {
      state.Cart = state.Cart.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
   setLike:(state,action)=>{
    state.Like=action.payload;
   },
   addLikeItem: (state, action) => {
    state.Like.push(action.payload);
  },
  removeLikeItem: (state, action) => {
    // state.Like = state.Like.filter(item => item.id !== action.payload);
    state.Like=state.Like.filter(item=>item.id !==action.payload);
  },
  setCart:(state,action)=>{
    state.Cart=action.payload;
    console.log(action.payload)
  },
  setCartItem: (state, action) => {
    const item = state.Cart.find(i => i.id === action.payload.id);
    if (item) {
      item.quantity += 1;
    } else {
      state.Cart.push({ ...action.payload, quantity: 1 });
    }
  },
  removeCartItem:(state,action)=>{
    state.Cart=state.Cart.filter(item=>item.id !==action.payload);
  }
  }
});
export const {setLike ,addLikeItem,removeLikeItem,setCart,setCartItem,removeCartItem,increment,decrement}=UserSlice.actions;
export default UserSlice.reducer; 