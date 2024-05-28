import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import '../pages/page.css'

const variants = {
    open:{
        opacity: 1,
    },
    closed:{
        opacity: 0,
        height:0
    }

}

export default function Categories({name,list,activeCategory,setActiveCategory}) {
    const [menu, setMenu] = useState(false)

    const newList = Object.keys(list);
    return (
        <div  className='relative'>
            <motion.button onClick={()=>setMenu(!menu)} className='flex items-center justify-center border-l-2 border-slate-600 px-4 w-32 py-1'>
            <span>{name}</span>
            {
                !menu ? <ChevronDown className='mt-1'/> : <ChevronDown className='mt-1 rotate-180'/>
            }
            </motion.button>
            <motion.div variants={variants} transition={{ times: [0, 0.1, 0.9, 1] }}  animate={menu ? 'open' : 'closed'} className='grid z-50 absolute top-9 right-0 grid-cols-2 w-96 bg-blue-900 text-white p-3'>
                {
                    newList.map((genre,index) => {return <motion.div key={index} onClick={()=>{setActiveCategory(Object.values(list)[index])}} className=' m-1 hover:bg-blue-950 w-full cursor-pointer p-2'>{genre}</motion.div>})
                }
            </motion.div> 
    </div>
  )
}
