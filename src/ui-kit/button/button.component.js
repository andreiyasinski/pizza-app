import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';

const Button = ({ theme, children, onClick, className }) => {
  const buttonTheme = theme || 'primary';

  return (
    <button
      className={cn(styles.container, className, {
        [styles.primary]: buttonTheme === 'primary',
        [styles.secondary]: buttonTheme === 'secondary',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;