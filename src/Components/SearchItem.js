import React from "react";

function SearchItem(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for title or description..."
        name="search"
        className="form-control mt-2 p-2 col-sm-8 rounded-pill"
        onChange={props.handleChange}
      />
    </div>
  );
}

export default SearchItem;
