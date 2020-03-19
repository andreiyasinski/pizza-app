import React from 'react';
import styles from './app.module.css';
import Header from '../header/header.component';
import Pizzas from '../pizzas/pizzas.container';
import Bunner from '../banner/banner.component';
import Footer from '../footer/footer.component';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.headerBlock}>
        <div className={styles.wrapper}>
          <Header />
        </div>
      </div>
      <div className={styles.main}>
        <Bunner />
        <div className={styles.wrapper}>
          <Pizzas />
        </div>
      </div>
      <div className={styles.footerBlock}>
        <div className={styles.wrapper}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
