import React from "react";
import AddTodo from "../../components/addTodo";
import Todo from "../../components/todolist";
import { useState} from 'react'
import Notification from "../../components/notification";


const todoList = [
  {
    id: 1,
    title: "Mengerjakan Exercise",
    done: true,
  },
  {
    id: 2,
    title: "Mengerjakan Assignment",
    done: false,
  },
];

const TodoContainer = () => {
   
    const [todos,setTodos]=useState(todoList)

    const handleAddTodo =(newTodo)=>{
        const newTodoList = [...todos,newTodo]
        setTodos(newTodoList)
    }
    const handleRemoveTodo=(id)=>{
      const  newTodoList=todos.filter(todo=>todo.id!==id)
        setTodos(newTodoList)
    }
    const handleCheckboxChange = (id)=>{
       const newTodoList = todos.map(todo=> {
        if(todo.id===id)
        return{...todo,done:!todo.done}
        return todo;
        })
        setTodos(newTodoList)
    }
  return (
    
    <div style={{ margin: 0 }}>
     
      <h1 align="center" className=" mt-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl font-bold">Todos</h1>
     <Notification/>
      <AddTodo addTodo={handleAddTodo} />

      {todos.length>0?todos.map((todo) => (
        <Todo todo={todo} key={todo.id} removeTodo={handleRemoveTodo} handleChange={handleCheckboxChange}/>
      )):<p align='center'> no todo left</p>}
    </div>
  );
};

export default TodoContainer;
