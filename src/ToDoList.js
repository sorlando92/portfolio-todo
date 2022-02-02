
import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {

    // Two state variables to store new to-dos as they are being typed
    // and the array of to-dos and their current status.
    const [strNewTask, setNewTask] = React.useState("");
    const [arrToDo, setArrToDo] = React.useState([
        {
            key: RandomKey(),
            text: "Reach out to clients",
            isDone: false
        },
        {
            key: RandomKey(),
            text: "Write next week's training program",
            isDone: true
        }
    ]);


    // Function checks if a task has been entered, and if so
    // adds it to the array of to-dos
    function HandleNewTask() {
        if (strNewTask === "") {
            window.alert("Please enter a new to-do.");
            return "";
        }

        const newToDoList = [...arrToDo, {
            key: RandomKey(),
            text: strNewTask,
            isDone: false
        }]

        setArrToDo(newToDoList)
        setNewTask("")
    };


    // When clicked, function takes key and deletes the appropiate task
    function DeleteTask(key) {
        setArrToDo(
            arrToDo.filter(item => item.key !== key)
        );
    }


    // Function completes the task by changing isDone bool
    function TaskIsDone(key){
        const newArrToDo = arrToDo.map((item) => {
            if(item.key === key) {
                item.isDone =! item.isDone
                return item
            }
            return item
        });

        setArrToDo(newArrToDo);
    }


    // Creates object of ToDo list items
    const ToDoItems = arrToDo.map(item => {
        return (
            <ToDoItem
                key={item.key}
                item={item}
                onClickDelete={DeleteTask}
                onClickIsDone={TaskIsDone}
            />
        );
    });


    // Helper function used to create a unique key for map function
    // to be replaced by company standard, when available.
    function RandomKey() {
        return Math.floor(Math.random() * 10000);
    };
    

    return (
        <section className="todo--section">
            <div className="todo--input">
                <input
                    type="text"
                    placeholder="Enter a new to-do..."
                    value={strNewTask}
                    onChange={(e) => { setNewTask(e.target.value) }}
                />
                <button onClick={HandleNewTask}>Add</button>
            </div>
            <div classname="todo--list">
                <ul>
                    {ToDoItems}
                </ul>
            </div>
        </section>
    )
}

export default ToDoList;