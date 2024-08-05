import React from "react";
import Select from 'react-select';

function RatingFilter({ ratingFilter, setRatingFilter }) {
  const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...ratingFilter, Number(input.value)];
			setRatingFilter(state);
		} else {
			const state = ratingFilter.filter((val) => val >= Number(input.value));
			setRatingFilter(state);
		}
	};

  const options = [
    { value: 5, label: "5 & above" },
  ]

  return (
    <Select options={options} />
  )
}

export default RatingFilter;
