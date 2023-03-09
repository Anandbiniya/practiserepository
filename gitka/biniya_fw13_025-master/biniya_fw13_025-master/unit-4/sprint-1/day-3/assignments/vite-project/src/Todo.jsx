import { react, useState } from "react";
import { TodoList } from "./TodoList";
import { nanoid } from "nanoid";
// import "../index.css";

export const Todo = () => {
  const [Todolist, setTodolist] = useState([]);
  const getTodo = (id) => {
    const data = document.getElementById(id).value;

    document.getElementById(id).value = "";
    setTodolist([
      ...Todolist,
      {
        title: data,
        id: nanoid(5),
      },
    ]);
  };

  return (
    <>
      <div style={{backgroundColor:"#DA70D6",width:"50%" ,borderRadius:"10px",justifyContent: "space-between", margin: "auto",height:"auto" }}>
        <input
          id="inputTodo"
          type="text"
          placeholder="Enter Task"
          style={{ borderRadius: "10px", height: "30px" }}
        ></input>
        <button
          onClick={() => {
            getTodo("inputTodo");
          }}
          style={{
            backgroundColor: "#00FFFF",
            borderRadius: "10px",
            height: "30px",
            marginBottom: "5px",
          }}
        >
          +
        </button>
        
        <TodoList data={Todolist}    
             />
      </div>
      
    </>
  );
};
