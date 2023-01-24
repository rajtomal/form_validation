import React, { useState } from 'react'

import Todos from "./todos"
import NewTodo from "./newTodo"

const dummytodos = ["todos-1", "todos-2"]

const Home = () => {


  // input value to add dummytodos list
  const [todos, setTodos] = useState(dummytodos);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    //console.log(newTodo)
  }



  return (
    <div>
        <NewTodo onTodo = {handleNewTodo}/>
        <Todos todos={todos}/>
    </div>
  )
}

export default Home;


