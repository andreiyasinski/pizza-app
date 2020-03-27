import React from 'react';
import styles from './logo.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo4.png';


const Logo = ({ className }) => {
  return (
    <Link
      to="/"
      className={cn(styles.container, className)}
    >
      <img className={styles.image} src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;