import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  function handleChange(event) {
    const x = event.target.value;
    setItem(x);
  }
  function handleList() {
    setList((prev) => {
      return [...prev, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
