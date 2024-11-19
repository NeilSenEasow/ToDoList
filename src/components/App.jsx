import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleInput(event) {
    setText(event.target.value);
  }

  function addList() {
    setList((prevList) => [...prevList, text]);
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleInput}
          type="text"
          value={text}
          placeholder="Add a new task"
        />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul id="list">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
