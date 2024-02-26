import AnimatedPage from '../components/AnimatedPage';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';

const Home = () => {
  return (
    <>
      <AnimatedPage>
        <Navbar />
        <Hero />
        <Featured />
        <Portfolio />
        <Footer />
      </AnimatedPage>
    </>
  );
};

export default Home;
