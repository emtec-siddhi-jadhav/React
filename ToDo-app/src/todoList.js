import React from "react";

const TodoList = (props) => {
    
    return (
    <>
    <div className="todo-style">
        <button onClick={() => {
            props.onSelect(props.id)
        }}> X </button>
        <li>{props.text}</li>
    </div>
    <br></br></>
    )
};

export default TodoList;