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
            <div className="grid grid-cols-12">
                <div className="col-span-2 bg-black h-screen pl-2">
                    <Sidebar/>
                </div>
                <div className="col-span-10 bg-slate-100 h-screen pl-2">   
                    <NavPage/>
                </div>
            </div>
        </section>
    </React.Fragment>
    </>
  )
}

export default RouterJs