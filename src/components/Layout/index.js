import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import GoToTop from '../GoToTop/GoToTop';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ children, title }) => {
  const { t, i18n } = useTranslation('translation');

  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navbar t={t} i18n={i18n} />
      {children}
      <GoToTop />
      <Footer t={t} i18n={i18n} />
    </main>
  );
};

export default Layout;
