import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");

  useEffect(() => {
    setTodo("");
  }, [toDos]);
 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>hai,Try some ToDO List🌝 ☕ </h2>
      </div>
      {/* Add list of elements */}
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {console.log("toDos", toDos)}
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                {/* checked or not in the list */}
                <input
                  type="checkbox"
                  value={obj.status}
                  onChange={(e) => {
                    setTodos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        console.log("checkbox clixk", obj2);
                        return obj2;
                      })
                    );
                  }}
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              {/* delete list of elements in a click */}
              <div className="right">
                <i
                  onClick={() => {
                    setTodos((toDos) =>
                      toDos.filter((obj3) => obj3.id !== obj.id)
                    );
                    return toDos;
                  }}
                  className="fas fa-times"
                ></i>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
