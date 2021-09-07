import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import CartPage from '../pages/CartPage/CartPage';

const Cart = () => {
  const { t } = useTranslation('translation');

  return (
    <Layout title="cart">
      <CartPage t={t} />
    </Layout>
  );
};

export default Cart;
