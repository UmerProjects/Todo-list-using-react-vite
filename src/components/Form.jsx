import React from "react";
import { CgAddR } from "react-icons/cg";

function Form({todos, setTodos}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.todo.value;
        const newTodo = {
          title: value,
            id: self.crypto.randomUUID(), 
            is_completed: false
        }
        setTodos((prevTodos) => [
          ...prevTodos, newTodo
        ]);
        const updatedTodoList = JSON.stringify([...todos, newTodo]);
        localStorage.setItem("todos", updatedTodoList);
        event.target.reset();
    }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="write your next task"
        />
      </label>
      <button>
      <CgAddR size={"3em"} color="white"/>
        <span className="visually-hidden"></span>
      </button>
    </form>
  );
}

export default Form;
