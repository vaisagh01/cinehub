import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from './MovieCard';
import SearchCard from './SearchCard';
const API_KEY = 'cc0e2f4b6a82284dfa9a47aae043d3b0'

export default function Search() {
    const [list, setList] = useState([]);
    const {searchTerm} = useParams();
    const fetchSearch = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/search/collection?api_key=${API_KEY}&query=${searchTerm}&include_adult=false&language=ml&region=IN`)
        const data = await res.json();
        setList(data.results)
        console.log(data.results);
    }
    useEffect(()=>{
        if(searchTerm){
            fetchSearch();
        }
    },[searchTerm]);

    return (
        <div className='pt-16 min-h-screen bg-zinc-950 text-slate-300 '>
           <div className='flex'>
            <p>Search results for "</p> {searchTerm} <p>"</p>
           </div>
           <div className='h-[1px] bg-slate-500 m-5'></div>
           <div>
            {
                list.length === 0 ? "Type something to search":
                <div  className='grid grid-cols-4'>
                    {
                        list.map((item,index) => {
                            return <SearchCard item={item} />
                        })
                    }
                </div>
            }
           </div>
        </div>
    )
}
