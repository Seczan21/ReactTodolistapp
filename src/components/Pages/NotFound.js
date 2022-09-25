import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Maintenance from '../img/main.png'
const NotFound = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=> {
            navigate("/")
        },10000)
    },[])
  return (
   <>
   <section>
    <div className="text-black font-bold text-4xl text-center items-center ">
        <img src={Maintenance} alt="" className="w-96 ml-auto mr-auto block" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
   </section>
   </>
  )
}

export default NotFound