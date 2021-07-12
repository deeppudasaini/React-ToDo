import React from 'react'
import {TodoItem} from './TodoItem'
export const Todos = (props) => {
    return (
        <div className="container">
            <h3>Todos List</h3>
            {props.todos.length===0?"No Todos To Display":
          props.todos.map((todo)=>{
              return <TodoItem todo={todo} key={todo.No} onDelete={props.onDelete} />
          })}
           
        </div>
    )
}
