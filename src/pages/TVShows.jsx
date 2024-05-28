import React, { useState, useEffect } from 'react'
import './page.css'
import fetchShowWithGenre from '../api/fetchShowWithGenre';
import MovieCard from '../components/MovieCard';
import { ChefHat, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import languages from '../api/languageList';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const genres = {
  'Action': 10759,
  'Animated': 16,
  'Crime' :80,
  'Documentary': 99,
  'Drama' :18,
  'Comedy' :35,
  'Family' :10751,
  'kids':10762,
  'Mystery' :9648,
  'Romance' :10749,
  'History': 36,
  'Scifi' :878,
}

const variants = {
  open:{
      opacity: 1,
  },
  closed:{
      opacity: 0,
      height:0
  }

}
export default function TVShows() {
  const [list, setList] = useState([])
  const [activeGenre, setActiveGenre] = useState(10759);
  const [menu, setMenu] = useState(false);
  const genreNames = Object.keys(genres)
  const languageList = Object.keys(languages)
  const [activeLanguage, setActiveLanguage] = useState("en");
  
  const handleMenu = () => {
    setMenu(!menu);
    document.getElementById('menu').classList.toggle('show');
  }

  useEffect(()=>{
      const fetchList = async () => {
          const data = await fetchShowWithGenre('tv',"",activeLanguage,activeGenre);
          setList(data)
      }
      fetchList();
  },[activeGenre,activeLanguage])
  console.log(list);
  return (
    <div className='page-bg'>
      
      <header className='flex fixed justify-between items-center z-10 bg-zinc-900 -mt-3 w-full text-slate-300 p-2'>
        <h1 className='text-sm lg:text-2xl md:text-xl px-3 font-bold text-blue-500 text-center '>
          {Object.keys(genres).find(key => genres[key] === activeGenre)} 
          <span> TV shows in </span>
          {Object.keys(languages).find(key => languages[key] === activeLanguage)} 
        </h1>
        
        <div className='flex'>
          <div>
            <Select className="m-1">
              <SelectTrigger className="w-[100px] bg-transparent">
                <SelectValue placeholder={Object.keys(languages).find(key => languages[key] === activeLanguage)} />
              </SelectTrigger>
              <SelectContent className="bg-zinc-950">
                <ul className='flex flex-col text-slate-400 text-lg'>
                  {
                    languageList.map((item, index) => {
                      return <button value={item} key={index} onClick={()=>{setActiveLanguage(Object.values(languages)[index])}} className='m-1 px-3 py-1 rounded-full hover:text-white transition-all'>{item}</button>
                      
                    })
                  }
                </ul>
                
              </SelectContent>
            </Select>
          </div>
          <button onClick={handleMenu} className='flex items-center justify-center border-l-2 border-slate-600 px-4 w-32 py-1'>
            <span className='text-sm'>Categories</span>
            {
                !menu ? <ChevronDown className='mt-1'/> : <ChevronDown className='mt-1 p-1 rotate-180'/>
            }
          </button>
          <div id='menu' className='grid z-50 show absolute top-12 right-0 grid-cols-2 w-96 bg-blue-900 text-white p-3'>
            {
                genreNames.map((genre,index) => {return <motion.div key={index} onClick={()=>{setActiveGenre(Object.values(genres)[index]);document.getElementById('menu').classList.add('show');}} className=' m-1 hover:bg-blue-950 w-full cursor-pointer p-2'>{genre}</motion.div>})
            }
          </div> 
        </div>
      </header>
      
      {
        list.length === 0 ? <p className='mt-12 h-screen p-9 text-slate-200 text-3xl font-medium'>No shows in {Object.keys(genres).find(key => genres[key] === activeGenre)} !</p>
        :
        <motion.div layout className='grid mt-9 grid-cols-2 overflow-hidden lg:grid-cols-6 md:grid-cols-3 '>
        {
          list.map((movie, index) => {
            return <div key={index} ><MovieCard item={movie} /></div>
          })
        }
      </motion.div>
      }
    </div>
  )
}
