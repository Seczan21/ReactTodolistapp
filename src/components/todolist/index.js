import React from 'react'
import { emitter } from '../notification'

const Todo  = ({todo,removeTodo,handleChange}) =>{
    const handleCheckboxChange=()=>{
      if(todo.done)
        return null;
      handleChange(todo.id)
      emitter.emit("NOTIFICATION",`"${todo.title}" Checkbox Sukses di Pilih!`)
    }
  return (
    <div>
        <input type="checkbox"  style={{margin:"0 10px"}} checked={todo.done} onChange={()=>{handleCheckboxChange(todo.id)}}/>
        <span style={todo.done?{textDecoration:"line-through"}:null}>{todo.title}</span>
        <span style={{ right:20, padding:"0 10px"}} className="w-full flex justify-end">
            <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full text-white p-2 " onClick={()=>{removeTodo(todo.id) (emitter.emit("NOTIFICATION",`"${todo.title}" Sukses Menghapus!`))}}>Delete</button>
        </span>
        <hr className='mb-5'/>
    </div>
  )
}

export default Todo