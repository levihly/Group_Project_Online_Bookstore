import React from "react";
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ArrowUp from '@material-ui/icons/KeyboardArrowUp';

function Sort({ sort, setSort }) {
  const onSortChange = ({ currentTarget: input}) => {
    setSort({ sort: input.value, order: sort.order });
  }

  const onOrderChange = () => {

		if (sort.order === "asc") {
			setSort({ sort: sort.sort, order: "desc" });
		} else {
			setSort({ sort: sort.sort, order: "asc" });
		}
	};

  return (
    <div className="center">
      Sort by:
      <select
        // defaultValue={sort.sort}
        onChange={onSortChange}
      >
        <option value="rating">Rating</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="year">Year</option>
      </select>
      <button onClick={onOrderChange}>
        {(sort.order === "desc") ? <ArrowDown/> : <ArrowUp/>}
      </button>

    </div>
  )
}

export default Sort;
