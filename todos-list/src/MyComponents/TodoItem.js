import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div>
            <h3 className="text-center">{todo.title}</h3> 
            <p>{todo.No}</p>
            
            <p>{todo.desc}</p>
            
            <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Remove</button>
            <hr/>
        </div>
    )
}
