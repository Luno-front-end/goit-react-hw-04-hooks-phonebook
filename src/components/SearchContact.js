import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import s from './PhoneBock.module.css';

export default function SearchContact({ velue, SearchContact }) {
  const id = shortid.generate();
  return (
    <div className={s.containerSearch}>
      <label className={s.labelSearch} htmlFor={id}>
        Поиск контакта по имени
      </label>
      <input
        type="text"
        name="filter"
        value={velue}
        onChange={SearchContact}
        id={id}
        className={s.inputSearch}
      ></input>
    </div>
  );
}
SearchContact.propTypes = {
  velue: PropTypes.string.isRequired,
  SearchContact: PropTypes.func.isRequired,
};
