import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';

const Button = ({ theme, children }) => {
  const buttonTheme = theme || 'primary';

  return (
    <button href="/"
      className={cn(styles.container, {
        [styles.primary]: buttonTheme === 'primary',
        [styles.secondary]: buttonTheme === 'secondary',
      })}
    >
      {children}
    </button>
  );
};

export default Button;