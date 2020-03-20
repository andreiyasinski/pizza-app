import React from 'react';
import styles from './filterItem.module.css';

const FilterItem = ({ item, onClick }) => {
  return (
    <li className={styles.listItem} key={item.id}>
      <label className={styles.label}>
        <span className={styles.text}>{item.name}</span>
        <input
          className={styles.input}
          onClick={(e) => onClick(e, item.id)}
          type="checkbox"
          name={item.type}
          id={item.id}
        />
      </label>
    </li>
  );
};

export default FilterItem;