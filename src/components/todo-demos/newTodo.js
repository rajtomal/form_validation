import React, { useState } from 'react'

const NewTodo = (props) => {

    const [todo, setTodo] = useState('');

    const handleChange = (event) => {
        setTodo(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onTodo(todo);

    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='todo'>New Todo: </label>
        <input type="text" name='todo' value={todo} onChange={handleChange} />
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;