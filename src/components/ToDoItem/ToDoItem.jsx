import Reach from "react";

import "./TodoItem.css";

//props = property/object/child property
function ToDoItem(props) {

    const {todo, index, completeToDo, removeToDo} = props;

    return (<div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
        {todo.text}
        <div>
        <button onClick={() => completeToDo(index)}>Complete</button>
        <button onClick={() => removeToDo(index)}>x</button>
    </div>
    </div>
    );
}

export default ToDoItem;