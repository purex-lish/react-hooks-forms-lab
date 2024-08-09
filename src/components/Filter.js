// import React from "react";

// function Filter({ onCategoryChange }) {
//   return (
//     <div className="Filter">
//       <input type="text" name="search" placeholder="Search..." />
//       <select name="filter" onChange={onCategoryChange}>
//         <option value="All">Filter by category</option>
//         <option value="Produce">Produce</option>
//         <option value="Dairy">Dairy</option>
//         <option value="Dessert">Dessert</option>
//       </select>
//     </div>
//   );
// }

// export default Filter;
import React, { useState } from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  const [searchText, setSearchText] = useState(search || "");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    if (onSearchChange) {
      onSearchChange(event.target.value);
    }
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
