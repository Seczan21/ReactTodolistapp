import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoContainer from '../../container/todoContainer/index.js'
import AboutApp from './AboutApp.js'
import AboutAuthor from './AboutAuthor.js'
const NavPage = () => {
  return (
   <>
    <React.Fragment>
   
        <section>
        
       
         <Routes>
          
          <Route path="/" element={<TodoContainer/>}/>
         </Routes>
        <Routes>
          <Route path="/about/about-app" element={<AboutApp/>}/>
          <Route path="/about/about-author" element={<AboutAuthor/>}/>
        </Routes>
       
      
       
        
        </section>
        
    </React.Fragment>
   </>
  )
}

export default NavPage