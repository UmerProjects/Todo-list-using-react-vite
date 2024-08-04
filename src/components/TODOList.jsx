import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaLess } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

function TODOList({ todos, setTodos }) {
  return (
    <ol className="todo-list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <Item key={index} item={item} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

function Item({ todos, item, setTodos }) {
  const [editing, setEditing] = useState(false);

  const inputRef = useRef(null);

  const completeTodos = () => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();

      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };
  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  const handleDelete = () => {
    setTodos((prevTodos) =>prevTodos.filter((todo) => 
        todo.id !== item.id))
    const updatedTodos = JSON.stringify(
      todos.filter((todo) => todo.id !== item.id)
    );
    localStorage.setItem("todos", updatedTodos);
  };

  useEffect(() => {
    console.log('current to the list', todos)
  }, [todos])
  return (
    <li id={item?.id} className="todo-item">
      {editing ? (
        <form className="edit-form" onSubmit={handleInputSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          <button className="todo-items-left" onClick={completeTodos}>
            {item.is_completed ? <FaCircle /> : <FaRegCircle />}
            <p>{item?.title}</p>
          </button>
          <div className="todo-items-right">
            <button onClick={handleEdit}>
              <FaEdit size={"2.5em"} />
              <span className="visually-hidden">Edit</span>
            </button>
            <button onClick={handleDelete}>
              <MdDelete size={"2.5em"} />
              <span className="visually-hidden">Delete</span>
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TODOList;
