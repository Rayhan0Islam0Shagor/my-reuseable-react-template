import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage/HomePage';

const Home = () => {
  const { t } = useTranslation('translation');

  return (
    <Layout title="AMAR SHOP">
      <HomePage t={t} />
    </Layout>
  );
};

export default Home;
