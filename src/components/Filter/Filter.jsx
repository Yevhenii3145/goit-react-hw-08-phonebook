import React from 'react'
import PropTypes from 'prop-types';
import { FilterBox, FormLabel, FormInput } from "./Filter.styled"
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';


export default function Filter({ filterId, filter }) {
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <FilterBox>
      <FormLabel htmlFor={filterId}>Find contacts by name</FormLabel>
      <FormInput
        id={filterId}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </FilterBox>
  )
}

Filter.propTypes = {
  filterId: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
}
