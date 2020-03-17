import React from 'react';
import styles from './footer.module.css';
import Logo from '../../../ui-kit/logo/logo.component';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerLeft}>
        <p className={styles.copyright}>
          © Copyright 2019 ООО «Pizza DELIVERY» Все права защищены. Возраст 6+
        </p>
        <a className={styles.link} href="/">Политика обработки персональных данных</a>
      </div>
      <Logo />
    </div>
  );
};

export default Footer;