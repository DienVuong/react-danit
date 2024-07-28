const TodoList = (props) => {
  const {todoList} = props
const handleDelete = () => {

}
    return(
      <div className='todo-list'>
        <div>
          {todoList.map((item, index) => {
            return (
                <ul className="todoItem" key="index">
                  <li>{item.name}</li>
                  <button className="todoButton" onClick={handleDelete}>Delete</button>
                </ul>
            )
          })}
        </div>
      </div>
    )
}

export default TodoList;