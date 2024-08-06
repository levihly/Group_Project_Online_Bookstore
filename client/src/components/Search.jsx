import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({ setSearch }) {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
      className="search"
      type="text"
      placeholder="Search by title, author, keywords"
      onChange={({currentTarget: input}) => setSearch(input.value)}
      />
    </div>
  )
}

export default Search;
