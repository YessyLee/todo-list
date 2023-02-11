import React, { useState } from "react";


//Components
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";

import "./App.css";

function App() {
//State
  const [todos, setTodos] = useState([
    {text: "Do this", isComplete: false},
    {text: "Do this", isComplete: false},
    {text: "Do this", isComplete: false},
  ]);

//Action
  const addTodo = (text) => {
    const newTodos = [...todos, {text: text, isComplete: false}]; //...expand the array into the new array, so not array in an array (not separate array)?
    setTodos(newTodos);
  };

  const completeToDo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1); //Splice update the one we are passing
    setTodos(newTodos);}

  return (
    <div className="app">
      <div className="todo-list">
        <h1>ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem key={index} todo={todo} index={index} completeToDo={completeToDo} 
          removeToDo={removeToDo} /> //map to get everything across array
    ))}
          <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}


export default App;
