import React from 'react'
import {BsBook} from 'react-icons/bs';

const Navbar = () => {
  return (
    <>
        <div className="bg-slate-500 text-black h-20 w-full flex items-center cursor-pointer">
            <div className="">
                <BsBook className="text-white text-4xl"/>
            </div>
            <div className="">
                <p className="text-white text-3xl">My TodoList</p>
            </div>
        </div>
    </>
  )
}

export default Navbar