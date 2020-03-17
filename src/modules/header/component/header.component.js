import React from 'react';
import styles from './header.module.css';
import Button from '../../../ui-kit/button/button.component';
import Logo from '../../../ui-kit/logo/logo.component';
import Basket from '../../../ui-kit/basket/basket.component';
import Phone from '../../../ui-kit/phone/phone.component';

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <nav>
        <ul className={styles.list}>
          <li><a href="/" className={styles.link}>Меню</a></li>
          <li><a href="/" className={styles.link}>Акции</a></li>
          <li><a href="/" className={styles.link}>Кэшбэк</a></li>
          <li><a href="/" className={styles.link}>О нас</a></li>
          <li><a href="/" className={styles.link}>Доставка</a></li>
        </ul>
      </nav>
      <Phone />
      <Basket />
      <Button>ВХОД</Button>
    </div>
  );
};

export default Header;