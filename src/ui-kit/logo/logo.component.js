import React from 'react';
import styles from './logo.module.css';
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <Link to="/" className={styles.container}>PIZZA_DELIVERY</Link>
  );
};

export default Logo;