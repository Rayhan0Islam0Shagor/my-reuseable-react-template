import React from 'react';
import styles from './Footer.module.scss';

const Footer = ({ t }) => {
  const year = new Date().getFullYear();

  return (
    <main className={styles.footer}>
      <small>
        {t('footer.1')} &copy; {t('footer.2')} | {year}
      </small>
    </main>
  );
};

export default Footer;
