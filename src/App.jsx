import TodoContent from './component/todo/TodoContent'; 
import TodoList from './component/todo/TodoList';
import './component/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react';


function App() {
  const [todoList, setToDoList] = useState([])


const addNewTodo = (inputValue) => {
  const newToDo = {
    id: randomInt(1,100),
     name: inputValue
  }
  setToDoList([...todoList, newToDo])
 }

const randomInt = (min, max) => {
  return Math.floor(Math.random()*(max - min +1) + min);
}

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoContent
      addNewTodo = {addNewTodo}
      />
      <TodoList
      todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' alt="" />
      </div>
    </div>

    
  );
}

export default App;
