import React from "react";

export default function Form() {
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

  return (
    <div className="todo-app" style={containerStyle}>
      <h2>Todo App</h2>

      <form action="">
        <input
          type="text"
          className="todo-input"
          placeholder="what do you need to do?"
          style={inputStyle}
        />
      </form>

      <ul className="todo-list" style={todoListStyle}>
        <li className="todo-item-container" style={todoItemStyle}>
          <div className="todo-item">
            <input type="checkbox" />
            <span className="todo-item-label">Finish React Series</span>
          </div>
        </li>

        <li className="todo-item-container" style={todoItemStyle}>
          <div className="todo-item">
            <input type="checkbox" />
            <span className="todo-item-label">Finish React Series</span>
          </div>
        </li>

        <li className="todo-item-container" style={todoItemStyle}>
          <div className="todo-item">
            <input type="checkbox" />
            <span className="todo-item-label">Finish React Series</span>
          </div>
        </li>
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
