import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputController from "./components/InputController";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  const [todos, setTods] = useState([]);
  const [todo, setTodo] = useState({
    todo: "",
    isChecked: false,
  });

  const HandleChange = (event) => {
    setTodo((prevTodo) => {
      return { ...prevTodo, [event.target.name]: event.target.value };
    });
  };

  const HandleClick = () => {
    if (todo.todo === "") {
      alert("Dont leave blank");
      return;
    }
    setTods((prevTods) => {
      return [...prevTods, todo];
    });

    setTodo({
      todo: "",
      isChecked: false,
    });
  };

  const HandleDelete = (idx) => {
    const filtredData = todos.filter((e, index) => index !== idx);

    setTods(filtredData);
  };
  return (
    <>
      <InputController
        HandleChange={HandleChange}
        todo={todo}
        HandleClick={HandleClick}
      />
      <DisplayTodo todos={todos} HandleDelete={HandleDelete} />
    </>
  );
}

export default App;
