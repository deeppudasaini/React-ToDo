// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import {Todos} from './MyComponents/Todos'
import {Footer} from './MyComponents/Footer'
import {AddTodo} from './MyComponents/AddTodo'
import React,{useState} from 'react';
function App() {
  const onDelete = (todo)=>
  {
  setTodos(todos.filter((e)=>{
    return e!=todo;
  }))
  }
  const [todos,setTodos]=useState([
    {
      'No':1,
      'title':'First Todo',
      'desc':'First Todo Description'
    },
    {
      'No':2,
      'title':'Second Todo',
      'desc':'Second Todo Description'
    },

  ]);
  const addTodo=(title,desc)=>
  {
    console.log("I am adding todo ",title,desc)
   let No=todos[todos.length-1].No+1;
    const myTodo={
      No:No,
      title:title,
      desc:desc
    } 
    setTodos([...todos,myTodo])
    
    
  }
  return (
  <>
<Header title= "Todo Lists" searchBar={true}/>
<AddTodo addTodo={addTodo}/>
<Todos todos={todos} onDelete={onDelete}/>
<Footer/>
    </>
  );
}

export default App;
