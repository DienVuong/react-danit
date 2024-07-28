const TodoList = (props) => {
  const {todoList} = props
const {name, age, data} = props;
const handleDelete = () => {

}
    return(
        <div className='todo-list'>
          <div>My name is {name}</div>
        <div>Learning React</div>
        <div>Watching youtube</div>
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