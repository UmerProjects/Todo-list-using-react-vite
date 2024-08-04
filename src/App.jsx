"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Form from "./components/Form";
import TODOHero from "./components/TODOhero";
import TODOList from "./components/TODOList";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Some tasks",
      id: self.crypto.randomUUID(), // string
      is_completed: false, // boolean
    },
  ]);


  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if(storedTodos) {
      let res = JSON.parse(storedTodos)
      setTodos(JSON.parse(storedTodos))

    }
  }, [])


  const todos_completed = todos.filter((todo) => todo.is_completed === true).length;
  const total_todos = todos.length
  return (
    <>
      <div className="wrapper">
        <Header />
        <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
        <Form todos={todos} setTodos={setTodos}/>
        <TODOList todos={todos} setTodos={setTodos}/>


      </div>
    </>
  );
}

export default App;
