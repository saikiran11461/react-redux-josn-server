import React, { useState } from 'react'

const Todo = ({handleAddTodo}) => {
    const [text,setText] = useState('')
    const handleAdd=()=>{
        if(text){
            handleAddTodo(text);
            setText("")
        }
    }
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAdd}>addtodo</button>
    </div>
  )
}

export default Todo