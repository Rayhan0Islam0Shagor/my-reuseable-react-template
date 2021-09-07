import styles from './CartPage.module.scss';

const CartPage = ({ t }) => {
  return (
    <div className={styles.cart}>
      <h1>{t('cart.1')}</h1>
    </div>
  );
};

export default CartPage;
