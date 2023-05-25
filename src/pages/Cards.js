import React, { useState } from 'react'
import {data} from './dataCenter'

export const Cards = (props) => {
 const [kudar , setKudar]=useState(0)

 const increment=()=>{

setKudar(kudar + 1)

 }

 const decrement=()=>{
    
  setKudar(kudar - 1)

  
 }

    const{name,imgswr,price}=props.item;
  return (
    <div className=' flex flex-col shadow-xl pb-5 '>
<div className=' overflow-hidden   h-72 object-cover flex flex-col justify-center'>
<img src={imgswr} />



</div>
<div className='flex  flex-col items-center'>

<p className='text-2xl font-semibold capitalize'> <span className='text-red-700'>Name : </span>{name}</p> 
<span className='text-2xl '>${price}</span>
<button className='bg-blue-500 mt-2 p-2 text-white text-2xl rounded-2xl hover:opacity-70 w-80  '>Add To Cart </button>
</div>

<div className='flex justify-around items-center mt-5'>

<button className='border-2  bg-slate-800 text-white text-2xl px-2 mt-2 hover:opacity-60' onClick={increment}>+</button>

<span className='px-12 py-1  500 border-2 text-black text-2xl  mt-1'>{kudar}</span>

<button className='border-2  bg-slate-800 text-white text-2xl px-2 mt-2 hover:opacity-60' onClick={decrement}>-</button>


</div>
 

    </div>

  )
}
