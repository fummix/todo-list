
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState({ todoName: '', id: todoList.length + 1, status: false })
  //##################
  const showRecordInForm = (item) => {
    setTodo(item)
  }
  //################Delete Record From todoList
  const deleteRecord = (id) => {
    console.log("We retrieve Id for deletion", id)
    const filteredList = todoList.filter(existingTodo => existingTodo.id !== id)
    console.log(filteredList)
    saveToLocalStorage(filteredList)
    setTodoList(filteredList)
  }
  //#################
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value
    });
  };
  const handleCheckBoxChange = (e, item) => {
    const { name, checked } = e.target;
    console.log(name, checked, item)
    if(checked){
      showRecordInForm(item)
    }
  };
  const saveToLocalStorage = (itemList) => { // method to save to local storage
    const todoJson = JSON.stringify(itemList) // converted to json before saving
    localStorage.setItem("todo", todoJson); // save to local storage
  }

  const getFromLocalStorage = () => {
    const itemFromStorage = localStorage.getItem("todo"); // retrieve from storage
    if (itemFromStorage) {
      const toObject = JSON.parse(itemFromStorage); // convert to normal object
      setTodoList(toObject);
    }
  }
  const AddToList = (event) => {
    event.preventDefault();
    if (todo.todoName.trim() === '') {
      alert('Kindly input a todoname');
      return;
    }
    todoList.push(todo) // add todo to list
    saveToLocalStorage(todoList)
    setTodo({ todoName: '', id: todoList.length + 1, status: false })
  };

  useEffect(() => {
    getFromLocalStorage()
  }, []);

  return (
    <div className="App">

      <div className="content">
        <h2>Add new Todo</h2>

        <form className="task-form" onSubmit={AddToList}>


          <input type="text" name="todoName" placeholder="Todo Name" id="task-form-input" value={todo.todoName}
            onChange={handleChange} />

          <button type='submit' className="btn" >Add Item</button>

        </form>
        <section className='main'>


          <ul className="flex-container" >
            {
              todoList.map((item) => (

                <li className="row" key={item.id} >
                  <input type="checkbox" className="sm1" id="myCheckbox" name="status" onChange={(event) => handleCheckBoxChange(event, item)} />
                  <span className="sm10">{item.todoName}</span>
                  <i className="material-icons icon" style={{ "marginRight": "-40px" }} onClick={() => deleteRecord(item.id)}>delete</i>
                </li>
              )
              )}
          </ul>

        </section>
      </div>


    </div>


  );
}

export default App;
