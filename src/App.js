
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const[todoList, setTodoList] = useState([])
  const[todo, setTodo] = useState({todoName:'', id: todoList.length+1,status:false})
 //##################
 const showRecordInForm=(item)=>{
setTodo(item)
 }
//################Delete Record From todoList
const deleteRecord=(id)=>{
  console.log("We retrieve Id for deletion", id)
  const filteredList = todoList.filter(existingTodo=> existingTodo.id!==id)
  console.log(filteredList)
  setTodoList(filteredList)
  saveToLocalStorage()
}
//#################
  const handleChange = (e) => {
    const { name, value} = e.target;
     setTodo({
      ...todo,
      [name]: value
    });
  };
  const handleCheckBoxChange = (e) => {
    const { name, checked} = e.target;
    console.log(name, checked)
    setTodo({
      ...todo,
      [name]: checked
    });
  };
const saveToLocalStorage =()=>{ // method to save to local storage
  const todoJson =JSON.stringify(todoList) // converted to json before saving
localStorage.setItem("todo", todoJson); // save to local storage
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
setTodo({todoName:'',id: todoList.length+1, status: false})
  };

  useEffect(()=>{
    getFromLocalStorage()
  }, []);
  
  return (
    <div className="App">
      
        <div className="content">
          <h2>Add new Todo</h2>

          <form  className="task-form" onSubmit={AddToList}>
          
          
            <input type="text" name="todoName" placeholder="Todo Name" id="task-form-input" value={todo.todoName}
             onChange={handleChange}/>
           
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
        {/* <div className="container">
          <p style={{textDecoration: item.status?'line-through':'none'}}>{item.todoName}</p>
        </div> */}
        {/* <div className="icons">
                  <button onClick={()=>showRecordInForm(item)}
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
          <button onClick={()=> deleteRecord(item.id)}
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
        </div> */}
      </div>
    ))
  ) : (
    // <p> No tasks available</p>
    <div>
        {/* <div className="container"> */}
            <ul className="flex-container">
                <li className="row">
                    <input type="checkbox" className="sm1" /> 
                    <span className="sm10">task1</span>
                    <i className="material-icons icon">delete</i>
                </li>
                <li className="row">
                    <input type="checkbox" className="sm1" /> 
                    <span className="sm10">task2</span>
                    <i className="material-icons icon">delete</i> 
                </li>
                
            </ul>
            
        </div>
    // </div>
  )}
</div>

          </div>
        </section>

      </div>
    

  );
}

export default App;
