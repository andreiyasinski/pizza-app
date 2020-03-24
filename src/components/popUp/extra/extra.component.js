import React from 'react';
import styles from './extra.module.css';

const Extra = ({ item }) => {
  return (
    <li className={styles.container}>
      <img
        src={item.image}
        className={styles.image}
        alt={item.name}
      />
      <span className={styles.text}>{item.name}</span>
      <div className={styles.bottom}>
        <span>
          {item.price}
        </span>
        <div>
          <svg width="25" height="25" viewBox="0 0 25 26" fill="#ff6900" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.724121" width="25" height="25" rx="12.5"></rect>
            <path fill="#ffffff" fillRule="evenodd" clipRule="evenodd" d="M13.3417 7.34352C13.3417 6.80997 12.9091 6.37744 12.3756 6.37744C11.842 6.37744 11.4095 6.80997 11.4095 7.34352V12.4695H6.69265C6.15909 12.4695 5.72656 12.902 5.72656 13.4355C5.72656 13.9691 6.15909 14.4016 6.69265 14.4016H11.4095V19.1174C11.4095 19.6509 11.842 20.0834 12.3756 20.0834C12.9091 20.0834 13.3417 19.6509 13.3417 19.1174V14.4016H18.4665C19 14.4016 19.4326 13.9691 19.4326 13.4355C19.4326 12.902 19 12.4695 18.4665 12.4695H13.3417V7.34352Z"></path>
          </svg>
        </div>
      </div>
    </li>
  );
};

export default Extra;