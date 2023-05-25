import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'


import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='h-[65px]  shadow-lg flex items-center justify-between px-12 gap-8 text-[17px]  text-blue-900  '>
  
  <div>


  </div>
     
        <div className='flex gap-5  '>
     <Link to='/' className='hover:text-slate-900  duration-100'>Home</Link>   
     <Link to='Cart'  className='hover:text-slate-900  duration-100 flex items-center gap-1'> <AiOutlineShoppingCart size={25}/>   </Link>

     </div>







    




     
     
     
    </div>
  )
}

export default Nav