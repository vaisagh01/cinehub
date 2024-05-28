import React, { useEffect, useState } from 'react'
import '../pages/page.css'
import MovieCard from './MovieCard'
import fetchShowWithGenre from '../api/fetchShow'
import fetchShow from '../api/fetchShow'
import { useNavigate } from 'react-router-dom'


export default function MovieSlider({media,country,language, listTitle}) {
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchList = async () => {
            const data = await fetchShow(media,country,language);
            setList(data)
        }
        fetchList();
    },[])
    return (
        <div initial={{opacity:0, y:-1}} animate={{opacity:1, y:0}} layout className='flex flex-col m-1'>
            <h1 onClick={()=>{navigate(`/moviepage/${country}/${language}`)}} className='text-3xl cursor-pointer hover:text-white font-medium px-3 drop-shadow-md text-slate-300'>
                {listTitle}
            </h1>
            <div className='flex overflow-x-scroll overflow-y-hidden hide-scroll'>
            {
                list.map(item => {
                return <MovieCard key={item.id} item={item} />
                })
            }
            </div>
        </div>
  )
}
