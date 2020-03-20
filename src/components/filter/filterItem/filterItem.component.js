import React, { useState } from 'react';
import cn from 'classnames';
import styles from './filterItem.module.css';

const FilterItem = ({ item, onClick }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckbox = (e, id) => {
    onClick(e, item.id);
    setIsChecked(!isChecked)
  }

  return (
    <li className={styles.listItem} key={item.id}>
      <label className={cn(styles.label, {
        [styles.checked] : isChecked
      })}>
        <span className={styles.text}>{item.name}</span>
        <input
          className={styles.input}
          onChange={handleCheckbox}
          type="checkbox"
          name={item.type}
          id={item.id}
          checked={isChecked}
        />
      </label>
    </li>
  );
};

export default FilterItem;