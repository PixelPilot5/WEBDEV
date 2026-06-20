import React from 'react'

const Todo = (props) => {
  return (
    <div className='flex justify-center items-center gap-4'>
    <input type='checkbox' onChange={props.handlechange}/>
    <p className='text-blue-500'>{props.todoText}</p>
    </div>
  )
}

export default Todo
