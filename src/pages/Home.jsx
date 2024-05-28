import React, { useEffect, useState } from 'react'
import fetchShow from '../api/fetchShow'
import MovieCard from '../components/MovieCard';
import './page.css'
import MovieSlider from '../components/MovieSlider';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const API_KEY = 'cc0e2f4b6a82284dfa9a47aae043d3b0'
  
  return (
    <div>
      <div className='page-bg h-full'>
        <MovieSlider media={'trending/all/week'} country={'US'} language={'en'} listTitle={'Trending Shows'} />
        <MovieSlider media={'discover/movie'} country={'IN'} language={'hi'} listTitle={'Bollywood Movies'} />
        <MovieSlider media={'movie/popular'} country={'IN'} language={'hi'} listTitle={'Popular Movies'} />
        <MovieSlider media={'discover/movie'} country={'IN'} language={'ml'} listTitle={'Mollywood Movies'} />
        <MovieSlider media={'discover/movie'} country={'IN'} language={'ta'} listTitle={'Tollywood Movies'} />
        <MovieSlider media={'discover/movie'} country={'IN'} language={'te'} listTitle={'Kollywood Movies'} />
        <MovieSlider media={'tv/popular'} country={'IN'} language={'ml'} listTitle={'Popular TV Shows'} />
        <MovieSlider media={'movie/now_playing'} country={'IN'} language={'ta'} listTitle={'Movies Now Playing'} />
        <MovieSlider media={'tv/on_the_air'} country={'IN'} language={'te'} listTitle={'TV shows Airing Now45'} />
      </div>
    </div>
  )
}
