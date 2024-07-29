const TodoList = (props) => {
  const {todoList, deleteTodo} = props
const handleDelete = (id) => {
  deleteTodo(id)
}
    return(
      <div className='todo-list'>
        <div>
          {todoList.map((item, index) => {
            return (
                <ul className="todoItem" key={item.id}>
                  <li>{item.name}</li>
                  <button className="todoButton" onClick={() => handleDelete(item.id)}>Delete</button>
                </ul>
            )
          })}
        </div>
      </div>
    )
}

export default TodoList;