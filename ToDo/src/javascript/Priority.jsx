import React, { useEffect, useState } from "react";

function Priority() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("todoItems")) || [];
    console.log("loaded items from local", savedItems);
    setItems(savedItems);
  }, []);

  useEffect(() => {
    console.log("saving", items);
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };
  const handleDelete = (indexToDelete) => {
    setItems(items.filter((item, index) => index !== indexToDelete));
  };

  return (
    <>
      <h2>Priority List</h2>
      <form
        onSubmit={handleFormSubmit}
        className="input-group mb-3 d-flex align-items-center"
      >
        <div className="input-group-text"></div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          style={{ width: "800px", height: "50px" }}
          value={inputValue}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="btn-submit btn-primary"
          style={{ marginLeft: "10px" }}
        >
          Submit
        </button>
      </form>

      <ul className="list-group mt-3">
        <div className="container">
          {items.map((item, index) => (
            <li
              key={index}
              className="list-group-item-today d-flex justify-content-between align-items-center"
            >
              {item}
              <div className="d-flex">
                <button
                  className="btn-delete btn-sm"
                  onClick={() => handleDelete(index)}
                  style={{ marginRight: "10px" }}
                >
                  Delete
                </button>
                <input
                  className="form-check-input"
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
}

export default Priority;
