import styles from './HomePage.module.scss';

const HomePage = ({ t }) => (
  <main className={styles.home}>
    <h1>{t('home.1')}</h1>
  </main>
);

export default HomePage;
