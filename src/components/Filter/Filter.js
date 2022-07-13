import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/phonebook/filterSlice';

import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  function handleFilterChange(evt) {
    dispatch(changeFilter(evt.target.value));
  }

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
}
