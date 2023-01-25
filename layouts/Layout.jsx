import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = (Component) => ({ ...props }) => {
  return (
    <div className='Layout DBlock'>
      <Header />
      <Component {...props} />
      <Footer />
    </div>
  );
};

export default Layout;
