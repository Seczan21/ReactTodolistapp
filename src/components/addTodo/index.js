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
        emitter.emit("NOTIFICATION","New Todo added Successfully")
        console.log(newTodo);
        setTitle("");
    }
  return (
    <div style={{margin:"50px",display:"block"}}    align="center">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Add todo..."  style={{width:"90%",padding:10}} required/>
            <input type="submit" style={{width:80,padding:10}}/>
        </form>
    </div>
  )
}

export default AddTodo