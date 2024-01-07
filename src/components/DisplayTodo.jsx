import React from "react";
import "./DisplayTodo.css";
function DisplayTodo({ todos, HandleDelete }) {
  return (
    <>
      <div className="wrapper">
        {todos.length === 0 ? (
          <p style={{ color: "white" }} className="notice">
            No todos Added
          </p>
        ) : (
          todos.map((e, index) => {
            return (
              <div className="todo" key={index}>
                <p>{e.todo}</p>
                <div className="actions">
                  <button onClick={() => HandleDelete(index)}>Delete</button>
                </div>
              </div>
            );
          })
        )}

        {/* <div className="todo">
          <p>This is todo</p>
          <div className="actions">
            <button>Delete</button>
          </div>
        </div>
        <div className="todo">
          <p>This is todo</p>
          <div className="actions">
            <button>Delete</button>
          </div>
        </div>
        <div className="todo">
          <p>This is todo</p>
          <div className="actions">
            <button>Delete</button>
          </div>
        </div>
        <div className="todo">
          <p>This is todo</p>
          <div className="actions">
            <button>Delete</button>
          </div>
        </div>
        <div className="todo">
          <p>This is todo</p>
          <div className="actions">
            <button>Delete</button>
          </div>
        </div>
        <div className="todo">
          <p>This is todo</p>
          <div className="actions">
            <button>Delete</button>
          </div>
        </div>
        <div className="todo">
          <p>This is todo</p>
          <div className="actions">
            <button>Delete</button>
          </div>
        </div>
        <div className="todo">
          <p>This is todo</p>
          <div className="actions">
            <button>Delete</button>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default DisplayTodo;
