import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

export default function Form(props) {
  const containerStyle = {
    maxWidth: "400px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    boxSizing: "border-box",
  };

  const todoListStyle = {
    listStyle: "none",
    padding: "0",
  };

  const todoItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  };

  const buttonStyle = {
    padding: "8px",
    marginRight: "8px",
    cursor: "pointer",
  };

  const othersButtonContainer = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  };

  const todoItem = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const initialState = [
    {
      id: 1,
      title: "Finish React Series",
      isComplete: false,
    },
    {
      id: 2,
      title: "Go Grocery",
      isComplete: true,
    },
    {
      id: 3,
      title: "Take Over World",
      isComplete: false,
    },
  ];
  const [todos, setTodos] = useState(initialState);
  const [todoInput, setTodoInput] = useState("");
  const [idForTodo, setIdForTodo] = useState(4);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
      },
    ]);

    setTodoInput("");
    setIdForTodo((preventIdForTodo) => preventIdForTodo + 1);
  };

  const handleInput = (event) => setTodoInput(event.target.value);

  const deleteToDo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app" style={containerStyle}>
      <h2>{props.title}</h2>

      <form action="#" onSubmit={addTodo}>
        <input
          type="text"
          className="todo-input"
          placeholder="what do you need to do?"
          style={inputStyle}
          value={todoInput}
          onChange={handleInput}
        />
      </form>

      <ul className="todo-list" style={todoListStyle}>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className="todo-item-container"
            style={todoItemStyle}
          >
            <div className="todo-item" style={todoItem}>
              <input type="checkbox" />
              <span
                className={`todo-item-label ${
                  todo.isComplete ? "line-through" : ""
                }`}
              >
                {todo.title}
              </span>
              <DeleteButton onClick={() => deleteToDo(todo.id)} />
            </div>
          </li>
        ))}
      </ul>

      <hr />

      <div style={othersButtonContainer}>
        <button style={buttonStyle}>Check all</button>
        <span>3 items remaining</span>
      </div>

      <hr />

      <div style={othersButtonContainer}>
        <button style={buttonStyle}>All</button>
        <p>Active</p>
        <p>Completed</p>
        <p style={{ cursor: "pointer" }}>Clear completed</p>
      </div>
    </div>
  );
}
