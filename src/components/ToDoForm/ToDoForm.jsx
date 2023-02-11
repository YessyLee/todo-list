import React, { useState } from "react";

function ToDoForm(props) {
    //props
    const { addTodo } = props;

    // State
    const[todo, setTodo] = useState("");

    // Action
    const handleSubmit = (event) => {
        event.preventDefault(); //dont refresh the page
        if (todo) {
            addTodo(todo);
            setTodo(""); //set it back to empty field,so we can enter another do to
        }
    };

    return (
        <form onSubmit ={handleSubmit}>
            <input type="text" 
            placeholder="Add todo here..." 
            value={todo} 
            onChange={(event) => setTodo(event.target.value)} //get the value
            />
        </form>
    );
}

export default ToDoForm;