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
        <span style={{position:"fixed", right:20, padding:"0 10px"}}>
            <button onClick={()=>{removeTodo(todo.id) (emitter.emit("NOTIFICATION",`"${todo.title}" Sukses Menghapus!`))}}>Delete</button>
        </span>
        <hr />
    </div>
  )
}

export default Todo