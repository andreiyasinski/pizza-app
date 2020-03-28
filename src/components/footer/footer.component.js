import React from 'react';
import styles from './footer.module.css';
import Logo from '../../ui-kit/logo/logo.component';
import { useSelector } from 'react-redux';

const text = {
  ru: {
    copyright: "Все права защищены.",
    link: "Политика обработки персональных данных"
  },
  en: {
    copyright: "All Rights Reserved.",
    link: "Personal Data Processing Policy"
  }
}

const Footer = () => {
  const language = useSelector(state => state.language.value);
  
  return (
    <div className={styles.container}>
      <div className={styles.footerLeft}>
        <p className={styles.copyright}>
          © Copyright 2019 «Pizza DELIVERY»<br />{text[language].copyright}
        </p>
        <a className={styles.link} href="/">{text[language].link}</a>
      </div>
      <Logo className={styles.logo} />
    </div>
  );
};

export default Footer;