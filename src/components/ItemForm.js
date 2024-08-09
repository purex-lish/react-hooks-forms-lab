import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    //input validation
    if (name.trim() === "") {
      setError("Name cannot be empty");
      return;
    }

    // new item object
    const newItem = {
      id: uuid(),
      name,
      category,
    };
    
    // Submit the item and clear form
    onItemFormSubmit(newItem);
    setName("");
    setCategory("Produce");
     // Clear any existing error
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label htmlFor="category">
        Category:
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      {error && <p className="error">{error}</p>}

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
