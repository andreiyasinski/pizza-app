import React, { useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './header.module.css';
import Logo from '../../ui-kit/logo/logo.component';
import BasketButton from '../../ui-kit/basketButton/basketButton.component';
import Phone from '../../ui-kit/phone/phone.component';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../actions';

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const number = useSelector((state) => state.basket.length);

  const nav = useRef(null);

  const handleMenu = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleMenu(!isMenuOpen));
    }
  }

  const closeMenu = () => {
    dispatch(toggleMenu(false))
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Logo className={styles.logo} />
        <div
          className={cn(styles.navWrapper, {
            [styles.navWrapperActive] : isMenuOpen
          })}
          onClick={handleMenu}
        >
          <nav
            className={cn(styles.navigation, {
            [styles.navigationActive] : isMenuOpen
          })}
          ref={nav}
          >
            <ul className={styles.list}>
              <li><NavLink onClick={closeMenu} to="/" exact className={styles.link} >Меню</NavLink></li>
              <li><NavLink onClick={closeMenu} to="/" exact className={styles.link}>Акции</NavLink></li>
              <li><NavLink onClick={closeMenu} to="/" exact className={styles.link}>Кэшбэк</NavLink></li>
              <li><NavLink onClick={closeMenu} to="/about" className={styles.link}>О нас</NavLink></li>
              <li><NavLink onClick={closeMenu}  to="/" exact className={styles.link}>Доставка</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className={styles.headerRight}>
          <Phone className={styles.phone} />
          <Link to="/basket" className={styles.basket}>
            <BasketButton number={number} />
          </Link>
        </div>
      </div>
      <div
        className={cn(styles.menuBlock, {
          [styles.menuActive] : isMenuOpen
        })}
        onClick={() => dispatch(toggleMenu(!isMenuOpen))}
      >
        <span className={styles.menu}>
          <span className={styles.menuLine}></span>
        </span>
      </div>
    </div>
  );
};

export default Header;