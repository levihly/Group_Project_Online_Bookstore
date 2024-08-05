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
      <p>Genre:</p>
      <Grid container spacing={1}>
        {genreOptions.map((genre) => (
          <Grid item xs={6}>
            <input
              type="checkbox"
              value={genre}
              onChange={onChange}
            />
            {genre}
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default GenreFilter;
