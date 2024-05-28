import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
    const {movieId} = useParams();
    const [item, setItem] = useState({})
    const fetchMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=cc0e2f4b6a82284dfa9a47aae043d3b0`)  
        const result = await response.json();
        setItem(result)
        console.log(result)
    }
    useEffect(()=>{
        fetchMovie();

    },[])
    return (
        <div className='pt-20 text-1xl h-[100vh] overflow-hidden text-white bg-zinc-950'>
            <img className='absolute top-0 left-0 w-[100vw] h-[100vh] object-cover opacity-40' src={'https://image.tmdb.org/t/p/w400'+item.backdrop_path} alt="" />
            {
                item.status_message  ? <p>Couldnt get info your looking for</p>
                :
                    <div className='w-full p-10 pt-20 flex z-10 text-slate-200 h-full top-0 right-0 absolute bg-gradient-to-r from-zinc-950 to-transparent'>
                        <div className='z-40 flex justify-between flex-col gap-9 p-9'>
                            <h1 className='font-bold text-7xl'>
                                {item.title}
                            </h1>
                            <p className='sfont-medium text-2xl'>
                                {item.overview}
                            </p>
                            <section className='text-xl'>
                                <p>Rating: {item.vote_average}</p>
                                <p>Runtime: {item.runtime}</p>
                                <p>
                                    
                                    Release: {
                                        item.release_date ? item.release_date.split("-")[0] : null
                                    }
                                </p>
                            </section>
                            {/* <p>{item.status}</p> */}
                        </div>
                        <div className='flex justify-center items-center w-full h-full'>
                            <img className=' w-1/2 rounded-xl shadow-2xl' src={'https://image.tmdb.org/t/p/w400'+item.poster_path} alt="" />
                        </div>
                    </div>
            }
        </div>
    )
}
