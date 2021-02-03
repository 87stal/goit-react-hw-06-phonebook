import React from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { onChangeFilter } from '../../redux/phonebook/phonebook-action';
import { getFilter } from '../../redux/phonebook/phonebook-selector';

function ContactFilter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <h3 className={styles.filterTitle}>Find contact by name</h3>
      <input
        className={styles.filterInput}
        type="text"
        value={filter}
        name="filter"
        onChange={event => dispatch(onChangeFilter(event.target.value))}
        autoFocus
      />
    </>
  );
}

export default ContactFilter;
