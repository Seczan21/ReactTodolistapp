import React from 'react'
import { NavLink } from 'react-router-dom'
import { SideBarAbout } from '../Data/SideBarData'

const AboutSide = () => {
    const activeLink = 'hover:bg-red-500 rounded-md mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-xl space-x-1 font-bold bg-red-500'
    const normalLink = 'hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-xl space-x-1 font-bold bg-slate-400 rounded-md'
  return (
    <>
  <section >
                <div className="text-white" >
                    {
                        SideBarAbout.map((item, index)=>{
                            return(
                                <div className="" key={index}>
                                    <NavLink to={item.path} className={({ isActive }) =>
                                         isActive ? activeLink: normalLink}>
                                        <span >{item.icon}</span>
                                        <span >{item.title}</span>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
                
            </section>
    </>
  )
}

export default AboutSide