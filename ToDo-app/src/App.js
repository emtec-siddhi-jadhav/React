import React, { useState } from "react";
import TodoList from "./todoList";
function App() {
  const [inputList, setInputList] = useState("");
  const [list, setList] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ListOfItems= () => {
    setList((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  const DeleteTask = (id) => {
    setList((oldItems)=> {
      return oldItems.filter((ListArray, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="app-background">
      <div className="app-main">
        <h1> ToDo LIST</h1>
        <br/>
        <input type='text' placeholder="Add task" onChange={itemEvent}/>
        <button onClick={ListOfItems}> + </button>
        <ol>
          {/*<li>{ inputList}</li> */}
          { list.map((itemValue, index) => {
            return <TodoList key={index} id={index} text={itemValue} onSelect={DeleteTask}/>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
