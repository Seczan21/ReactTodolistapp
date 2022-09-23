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
    <div style={{margin:"50px",display:"block"}}    align="center">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" className="bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-full sm:text-sm focus:ring-1" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Add todo..."  style={{width:"90%",padding:10}} required/>
            <input type="submit" className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full text-white" style={{width:80,padding:10}}/>
        </form>
    </div>
  )
}

export default AddTodo