import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import fetchShow from '@/api/fetchShow';
import MovieCard from '@/components/MovieCard';

export default function MoviePage() {
    const [list, setList] = useState([]);
    const language = useParams();
    const country = useParams();
    useEffect(()=>{
        const fetchList = async () => {
            const data = await fetchShow('discover/movie',country,language);
            setList(data)
        }
        fetchList();
    },[]);
    console.log(list);
  return (
    <div initial={{opacity:0, y:-1}} animate={{opacity:1, y:0}} className='flex flex-col m-1'>
        <p className='pt-20'>hello</p>
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
