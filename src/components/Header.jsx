import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState('This is search');
  const navigate = useNavigate();
  const handleActiveLink = () => {
    setIsActive(!isActive)
  }
  
  console.log(search);
  return (
    <header className='flex z-50 justify-around items-center w-full bg-zinc-900/95 shadow-xl fixed text-zinc-600 font-medium text-sm'>
      <div className='text-xl text-zinc-300 font-bold'>
        <a className='p-[px]' href={'/'}>CINEHUB</a>
      </div>
      <div className=''>
        <input className=' outline-none bg-transparent' placeholder='Search for movies' onChange={(e)=>{setSearch(e.target.value);navigate(`/search/${search}`)}} type="text" />
      </div>
      <ul className='flex gap-9 '>
        <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100 ease-in'} to={'/'}>HOME</NavLink>
        <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100'} to={'/movie'}>MOVIES</NavLink>
        <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100'} to={'/tvshow'}>TVSHOWS</NavLink>
        <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100'} to={'/about'}>ABOUT</NavLink>
      </ul>
    </header>
  )
}

// <header className='flex z-50 justify-around items-center w-full bg-zinc-900/95 shadow-xl fixed text-zinc-600 font-medium text-sm'>
//       <div className='text-xl text-zinc-300 font-bold'>
//         <a className='p-[px]' href={'/'}>CINEHUB</a>
//       </div>
//       <div className=''>
//         <input className=' outline-none bg-transparent' placeholder='Search for movies' onChange={(e)=>{setSearch(e.target.value);navigate(`/search/${search}`)}} type="text" />
//       </div>
//       <ul className='flex gap-9 '>
//         <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100 ease-in'} to={'/'}>HOME</NavLink>
//         <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100'} to={'/movie'}>MOVIES</NavLink>
//         <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100'} to={'/tvshow'}>TVSHOWS</NavLink>
//         <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100'} to={'/about'}>ABOUT</NavLink>
//       </ul>
//     </header>