import React from "react";
import Grid from "@material-ui/core/Grid";


function GenreFilter({ genreOptions, genreFilter, setGenreFilter }) {
  const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...genreFilter, input.value];
			setGenreFilter(state);
		} else {
			const state = genreFilter.filter((val) => val !== input.value);
			setGenreFilter(state);
		}
	};

  return (
    <div className="filter">
      <p className="filter-sort-header"><b>Filter by</b></p>
      <p><b>Genre:</b></p>
      <div className="genre-filter-list">
        {genreOptions.map((genre) => (
          <p>
            <label>
              <input
                type="checkbox"
                value={genre}
                onChange={onChange}
              />
              {genre}
            </label>
          </p>
        ))}
      </div>
    </div>
  )
}

export default GenreFilter;
