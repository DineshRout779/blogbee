import { Box } from '@chakra-ui/react';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Featured />
      <Portfolio />
      <Footer />
    </Box>
  );
}

export default App;
