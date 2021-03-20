import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa2 ba b--green bg-lightest-blue h3-l"
        type="search"
        placeholder="found your robot here"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
