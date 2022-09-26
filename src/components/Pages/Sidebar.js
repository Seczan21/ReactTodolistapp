import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import AboutSide from './AboutSide'

const Sidebar = () => {
  return (
    <>
    <nav >
      <ul>
        <li>
          <Link to="/" className='hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white font-semibold text-xl space-x-1 font-bold bg-slate-400 rounded-md'>Home
          </Link></li>
        <li>
          <NavLink to="/about" className='hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white font-semibold text-xl space-x-1 font-bold bg-slate-400 rounded-md'>About</NavLink>
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