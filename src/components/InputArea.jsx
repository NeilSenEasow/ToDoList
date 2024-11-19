import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAdd() {
    if (inputText.trim() !== "") {
      props.onAdd(inputText);
      setInputText("");
    }
  }

  return (
    <div className="form">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Add an Item"
      />
      <button onClick={handleAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
