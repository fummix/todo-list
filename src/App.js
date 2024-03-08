
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const[todoList, setTodoList] = useState([])
  const[todo, setTodo] = useState({todoName:''})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value
    });
  };
const saveToLocalStorage =()=>{ // method to save to local storage
  const todoJson =JSON.stringify(todoList) // converted to json before saving
localStorage.setItem("todo", todoJson); // save to local storage
getFromLocalStorage()
}

const getFromLocalStorage=()=>{
const itemFromStorage = localStorage.getItem("todo"); // retrieve from storage
if(itemFromStorage){
  const toObject = JSON.parse(itemFromStorage); // convert to normal object
setTodoList(toObject);
}
}
const AddToList=(event)=>{
event.preventDefault();
todoList.push(todo) // add todo to list
saveToLocalStorage()
setTodo({"todoName":''})
  };

  useEffect(() => {
    getFromLocalStorage()
  }, []);
  return (
    <div className="App">
      
        <div className="content">
          <h2>Add new Todo</h2>

          <form  className="task-form" onSubmit={AddToList}>
            <input type="text" name="todoName" placeholder="Todo Name" id="task-form-input" value={todo.todoName}
             onChange={handleChange}/>
            {/* <input type="submit" value="Add" id="task-form-submit"  onClick={ (e)}/> */}
            <button  type='submit' className="btn" >Add</button>

          </form>
        </div>
        <section>
          <div className="main">
            <h2>My todo list</h2>
            <div id="task-list">
  {todoList.length > 0 ? (
    todoList.map((item) => (
      <div className="task" key={item.id}>
        <div className="container">
          <p>{item.todoName}</p>
        </div>
        <div className="icons">
          <button
            className="edit"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px"
            }}
          >
            Edit
          </button>
          <button
            className="delete"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              marginLeft: "5px"
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ))
  ) : (
    <p>No tasks available</p>
  )}
</div>

          </div>
        </section>

      </div>
    

  );
}

export default App;
