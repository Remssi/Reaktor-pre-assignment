import React from "react";
import "./searchBar.css";

interface Props {
  setSearchText: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ setSearchText }) => {
  return (
    <div className="searchBar">
      <input
        placeholder="Filter rules"
        onChange={e => setSearchText(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
