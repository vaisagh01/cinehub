import React, { useState } from 'react'
import '../pages/page.css'
import {motion} from 'framer-motion'
import languages from '../api/languageList'
import { useNavigate } from 'react-router-dom'

export default function MovieCard({item}) {
  const [hover, setHover] = useState(false)
  const navigate = useNavigate();

  return (
    <motion.div onClick={()=>{navigate(`/movieinfo/${item.id}`)}} whileHover={{scale:1.04}}  onHoverStart={()=>{setHover(true)}} onHoverEnd={()=>setHover(false)}  className='relative cursor-pointer'>
      <div className='flex flex-col justify-between px-3 py-5 min-w-48 '>
        <img className='w-48 h-64 object-cover rounded-lg' src={'https://image.tmdb.org/t/p/w400'+item.poster_path} alt="" />
        <div className='text-slate-400 flex justify-between'>
          {
            item.release_date ? <p>{item.release_date.split("-")[0]}</p> : null
          }
          <p className='text-amber-400'>{item.vote_average.toFixed(1)}</p>
        </div>
      </div>
      {
        hover ? 
          <motion.div animate={{opacity:1, y:0}} initial={{opacity:0,y:40}} transition={{ ease:'linear' , delay:0.6, duration:0.1}} className='absolute w-48 text-slate-300 p-2 text-sm rounded-b-lg bg-slate-950/95 bottom-11 left-3 '>
            <p className='font-semibold'>{item.title}</p>
            <p className='font-semibold'>{item.original_title}</p>
            {/* <p className='font-semibold'>{item.title}</p> */}
            <p>{item.original_language}</p>
          </motion.div> : null
      }

    </motion.div>
  )
}
