import TodoContent from "./TodoContent";
import TodoList from "./TodoList";
import "./todo.css";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";

const TodoApp = () => {
  const [todoList, setToDoList] = useState([]);

  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setToDoList(newTodo);
  };

  const addNewTodo = (inputValue) => {
    const newToDo = {
      id: randomInt(1, 100),
      name: inputValue,
    };
    setToDoList([...todoList, newToDo]);
  };

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoContent addNewTodo={addNewTodo} />

      {todoList.length > 0 ? (
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      ) : (
        <div className="todo-image">
          <img src={reactLogo} className="logo" alt="" />
        </div>
      )}
    </div>
  );
};

export default TodoApp;
