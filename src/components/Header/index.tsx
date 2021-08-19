import React from "react";
import SearchBar from "../SearchBar";
import "./header.css";

interface Props {
  setSearchText: (text: string) => void;
}

const Header: React.FC<Props> = ({ setSearchText }) => {
  return (
    <div className="header">
      <SearchBar setSearchText={setSearchText} />
    </div>
  );
};

export default Header;
