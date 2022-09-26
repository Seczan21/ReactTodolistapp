import React from 'react'
import { useState } from 'react'
import {emitter} from '../notification'
const  AddTodo = ({addTodo}) => {
    const[title,setTitle]= useState("");
    const handleSubmit =(e)=>{
        e.preventDefault()
        const newTodo ={
            id: Math.random(),
            title:title,
            done: false,
          };
        addTodo(newTodo);  
        emitter.emit("NOTIFICATION",<p className='text-2xl font-semibold text-black '>Data Sukses ditambahkan!</p>)
        console.log(newTodo);
        setTitle("");
    }
  return (
    <div style={{margin:"50px",display:"block"}}    align="center" className='relative block'>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" id="text" className="block p-4 pl-10 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-full sm:text-sm focus:ring-1" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Add todo..."  required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

      </form>
    </div>
  )
}

export default AddTodo