import React from 'react'
import Navbar from './Navbar'
import NavPage from './NavPage'
import Sidebar from './Sidebar'

const RouterJs = () => {
  return (
    <>
    <React.Fragment>
        <section>
            <div className="">
                <Navbar/>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-12 ">
                <div className="col-span-2  h-screen pl-2 md:col-span-2 border-r-2 border-slate-400">
                    <Sidebar/>
                </div>
                <div className="col-span-10 h-screen pl-2 md:col-span-10 ">   
                    <NavPage/>
                </div>
            </div>
        </section>
    </React.Fragment>
    </>
  )
}

export default RouterJs