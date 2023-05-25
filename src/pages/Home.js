import React, { useState } from 'react'
import {data}from './dataCenter'
import {Cards} from './Cards'

const Home = () => {
    const[search,setSearch]=useState('');
  return (
    <div className=''>
     <div className='flex justify-center text-2xl mt-8 '>

<h1 className=''>Amazon <span className='text-red-600 font-serif'>Shopping</span></h1>

     </div>
<div className='flex justify-center p-2 mb-4 '>

<input className='border-2 border-gray-800 outline-none px-12 py-2 rounded-lg bg-slate-100' placeholder='Search' onChange={(event)=>setSearch(event.target.value)} />

</div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-10  '>

{
data.filter((val)=>{

if(search == ""){

    return val;

} else if(val.name.toLowerCase().includes(search.toLowerCase())){
return val;

}

}).map((val)=>(

    <Cards item={val} />

))



}


</div>



    </div>
  )
}

export default Home