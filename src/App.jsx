import TodoContent from './component/todo/TodoContent'; 
import TodoList from './component/todo/TodoList';
import './component/todo/todo.css'
import reactLogo from './assets/react.svg'


function App() {

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoContent/>
      <TodoList/>
      <div className='todo-image'>
        <img src={reactLogo} className='logo' alt="" />
      </div>
    </div>

    
  );
}

export default App;
