import React, { useState } from "react";
import "./SearchHeader.scss";

const SearchHeader = ({ searchResults = (t: string) => {} }) => {
  const [text, setText] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    searchResults(text);
  };
  return (
    <form className="header-container" onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search your news"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchHeader;
