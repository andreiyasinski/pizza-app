import React from 'react';
import styles from './logo.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';


const Logo = ({ className }) => {
  return (
    <Link
      to="/"
      className={cn(styles.container, className)}
    >
      PIZZA DELIVERY
    </Link>
  );
};

export default Logo;