
import './App.css';

function App() {
  return (
    <div className="App">
      
        <div className="content">
          <h2>Add new Todo</h2>

          <form action='' className="task-form">
            <input type="text" placeholder="Todo Name" id="task-form-input" />
            <input type="submit" value="Add" id="task-form-submit" />

          </form>
        </div>
        <section>
          <div className="main">
            <h2>My todo list</h2>
            <div id="task-list">
              <div className="task">
                <div className="container">
                  <p>Reading Bible</p>

                </div>
                <div className="icons" >
                  <button className="edit"  style={{"background-color": "blue" , color: "white", padding: "8px 16px", "border-radius": "8px"}}>Edit</button>
                  <button className="delete"style={{"background-color": "blue",  color: "white", padding: "8px 16px", "border-radius": "8px" ,"margin-left": "5px"}}>Delete</button>
                </div>

              </div>
              <div className="task">
                <div className="container">
                  <p>Reading Bible</p>

                </div>
                <div className="icons" >
                  <button className="edit" style={{"background-color": "blue" , color: "white", padding: "8px 16px", "border-radius": "8px"}}>Edit</button>
                  <button className="delete" style={{"background-color": "blue",  color: "white", padding: "8px 16px", "border-radius": "8px" ,"margin-left": "5px"}}>Delete</button>
                </div>

              </div>
              <div className="task">
                <div className="container">
                  <p>Reading Bible</p>

                </div>
                <div className="icons" >
                  <button className="edit" style={{"background-color": "blue" , color: "white", padding: "8px 16px", "border-radius": "8px"}}>Edit</button>
                  <button className="delete"style={{"background-color": "blue",  color: "white", padding: "8px 16px", "border-radius": "8px" ,"margin-left": "5px"}}>Delete</button>
                </div>

              </div>
              <div className="task">
                <div className="container">
                  <p>Cooking</p>

                </div>
                <div className="icons" >
                  <button className="edit" style={{"background-color": "blue" , color: "white", padding: "8px 16px", "border-radius": "8px"}}>Edit</button>
                  <button className="delete" style={{"background-color": "blue",  color: "white", padding: "8px 16px", "border-radius": "8px" ,"margin-left": "5px"}} >Delete</button>
                </div>

              </div>


            </div>
          </div>
        </section>

      </div>
    

  );
}

export default App;
