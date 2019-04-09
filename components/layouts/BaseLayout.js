import Header from '../Header';
import Footer from '../Footer';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const withLBaseLayout = (Children) => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Children />
      <Footer />
    </div>
  );
};

export default withLBaseLayout;
