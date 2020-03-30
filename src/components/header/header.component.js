import React, { useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './header.module.css';
import Logo from '../../ui-kit/logo/logo.component';
import BasketButton from '../../ui-kit/basketButton/basketButton.component';
import Phone from '../../ui-kit/phone/phone.component';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, changeLanguage } from '../../actions';
import { headerText as text } from '../../text/text';

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(state => state.menu.isMenuOpen);
  const amount = useSelector(state => state.basket.length);
  const language = useSelector(state => state.language.value);

  const nav = useRef(null);

  const handleMenu = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleMenu(!isMenuOpen));
    }
  };

  const closeMenu = () => {
    dispatch(toggleMenu(false));
  };

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
              <li>
                <NavLink onClick={closeMenu} to="/" exact className={styles.link}>
                  {text[language].menu}
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeMenu} to="/promotions" exact className={styles.link}>
                  {text[language].promotions}
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeMenu} to="/about" className={styles.link}>
                  {text[language].about}
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeMenu}  to="/delivery" exact className={styles.link}>
                  {text[language].delivery}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.selectWrapper}>
            <span
              onClick={() => dispatch(changeLanguage("en"))}
              className={cn(styles.language, {
                [styles.activeLanguage]: language === "en"
              })}
            >EN</span>
            <span className={styles.delimiter}>|</span>
            <span
              onClick={() => dispatch(changeLanguage("ru"))}
              className={cn(styles.language, {
                [styles.activeLanguage]: language === "ru"
              })}
            >RU</span>
          </div>
          <Phone className={styles.phone} />
          <Link to="/basket" className={styles.basket} tabIndex="-1">
            <BasketButton amount={amount} />
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