import React from 'react';
import styles from './app.module.css';
import Header from '../../header/component/header.component';
import Pizzas from '../../pizzas/container/pizzas.container';
import Bunner from '../../banner/component/banner.component';
import Footer from '../../footer/component/footer.component';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.headerBlock}>
        <div className={styles.wrapper}>
          <Header />
        </div>
      </div>
      <Bunner />
      <div className={styles.wrapper}>
        <Pizzas />
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
