import React from "react";

function Search({ setSearch }) {
 return (
   <input
    className="search"
    type="text"
    placeholder="Search by title, author, keywords"
    onChange={({currentTarget: input}) => setSearch(input.value)}
   />
 )
}

export default Search;
