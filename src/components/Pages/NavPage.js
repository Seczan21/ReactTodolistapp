import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoContainer from '../../container/todoContainer/index.js'
import AboutApp from './AboutApp.js'
import AboutAuthor from './AboutAuthor.js'
import NotFound from './NotFound.js'
const NavPage = () => {
  return (
   <>
    <React.Fragment>
   
        <section>
        
       
         <Routes>
          
          <Route path="/" element={<TodoContainer/>}/>
          <Route path="/about"/>
          <Route path="/about/about-app" element={<AboutApp/>}/>
          <Route path="/about/about-author" element={<AboutAuthor/>}/>
          <Route path='*' element={<NotFound/>}/>
          
         </Routes>
      
      
       
        
        </section>
        
    </React.Fragment>
   </>
  )
}

export default NavPage