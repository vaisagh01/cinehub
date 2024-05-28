import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import { motion } from 'framer-motion';
import { Menu, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState(null);
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate();
  const handleActiveLink = () => {
    setIsActive(!isActive)
  }
  
  console.log(search);
  return (
    <header className='flex z-50 justify-between px-5 items-center w-full bg-zinc-900/95 shadow-xl fixed text-zinc-600 font-medium text-sm'>
      <div className='text-xl text-zinc-300 font-bold'>
        <a className='p-[px]' href={'/'}>CINEHUB</a>
      </div>
      <div className='flex gap-3'>
        <input className=' outline-none lg:flex md:flex bg-transparent' placeholder='Search for movies' onChange={(e)=>{setSearch(e.target.value);navigate(`/search/${search}`)}} type="text" />
      </div>
      <ul className='gap-9 hidden lg:flex md:flex'>
        <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100 ease-in'} to={'/'}>HOME</NavLink>
        <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100'} to={'/movie'}>MOVIES</NavLink>
        <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100'} to={'/tvshow'}>TVSHOWS</NavLink>
        <NavLink className={'hover:text-fuchsia-100 transition-all p-[14px] duration-100'} to={'/about'}>ABOUT</NavLink>
      </ul>
      <div className='flex items-center gap-2 justify-center'>
        <div>
          <Search onClick={()=>{navigate(`/search/${search}`)}}/>
        </div>
        <button className='lg:hidden relative md:hidden flex items-center p-[14px] justify-center' onClick={()=>{setMenu(!menu)}}> <Menu /> </button>
        {
          menu 
          && <motion.ul animate={{height:300, opacity:1}} initial={{height:0, opacity:0}} className='gap-9 flex absolute overflow-hidden w-full top-[53px] right-0 bg-zinc-800 p-5 items-center justify-center flex-col lg:hidden md:hidden'>
              <NavLink className={'hover:text-fuchsia-100 transition-all p-2 duration-200 ease-in'} onClick={()=>{setMenu(false)}} to={'/'}>HOME</NavLink>
              <NavLink className={'hover:text-fuchsia-100 transition-all p-2 duration-100'} onClick={()=>{setMenu(false)}}  to={'/movie'}>MOVIES</NavLink>
              <NavLink className={'hover:text-fuchsia-100 transition-all p-2 duration-100'} onClick={()=>{setMenu(false)}}  to={'/tvshow'}>TVSHOWS</NavLink>
              <NavLink className={'hover:text-fuchsia-100 transition-all p-2 duration-100'} onClick={()=>{setMenu(false)}}  to={'/about'}>ABOUT</NavLink>
            </motion.ul>    
        }
      </div>
    </header>
  )
}
