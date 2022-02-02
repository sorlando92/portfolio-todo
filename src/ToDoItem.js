import React from "react";

function ToDoItem(props){

    return(
        <li className="todo-items">
            <span className={props.item.isDone ? "toDo--isDone": ""} >{props.item.text}</span>
            <span><button onClick={() => props.onClickIsDone(props.item.key)}>{props.item.isDone ? "Undo" : "Done"}</button>
            <button onClick={() => props.onClickDelete(props.item.key)}>X</button></span>
        </li>
    )
}

export default ToDoItem;