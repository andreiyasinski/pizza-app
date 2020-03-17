import React from 'react';
import styles from './phone.module.css';

const Phone = () => {
  return (
    <a className={styles.phone} href="tel:0000">
      <span className={styles.phoneIcon}>
        <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" className="svg-inline--fa fa-phone-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
        </svg>
      </span>
      0000
    </a>
  );
};

export default Phone;