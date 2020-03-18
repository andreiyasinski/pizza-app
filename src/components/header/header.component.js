import React from 'react';
import styles from './header.module.css';
import Logo from '../../ui-kit/logo/logo.component';
import Basket from '../../ui-kit/basket/basket.component';
import Phone from '../../ui-kit/phone/phone.component';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../actions';
import cn from 'classnames';

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const handleMenu = () => {
    dispatch(toggleMenu(!isMenuOpen));
  }

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
      <div className={styles.headerRight}>
        <Phone className={styles.phone}/>
        <Basket />
      </div>
      <div
        className={cn(styles.menuBlock, {
          [styles.menuActive] : isMenuOpen
        })}
        onClick={handleMenu}
      >
        <span className={styles.menu}>
          <span className={styles.menuLine}></span>
        </span>
      </div>
    </div>
  );
};

export default Header;