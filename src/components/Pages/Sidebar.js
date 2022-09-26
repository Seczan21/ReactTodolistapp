import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import AboutSide from './AboutSide'

const Sidebar = () => {
  return (
    <>
    <nav >
      <ul>
        <li>
          <Link to="/" className='hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-slate-500'>Home
          </Link></li>
        <li>
          <NavLink to="/about" className='hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-slate-500'>About</NavLink>
        </li>
      </ul>
    </nav>
    <nav>
    <Routes>
      <Route path='about/*' element={<AboutSide/>} className='text-white' />
    </Routes>
    </nav>
    </>
  )
}

export default Sidebar