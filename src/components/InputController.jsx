import React from "react";
import "./InputController.css";
import DisplayTodo from "./DisplayTodo";
function InputController({ HandleClick, HandleChange, todo }) {
  return (
    <>
      <div className="header">
        <h2>Todo App</h2>
      </div>
      <div className="input-h">
        <input
          type="text"
          className="input-box"
          value={todo.todo}
          name="todo"
          onChange={HandleChange}
        />
        <button onClick={HandleClick} type="button">
          Add
        </button>
      </div>
    </>
  );
}

export default InputController;
