import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Box } from '@chakra-ui/react';
import AnimatedPage from '../components/AnimatedPage';

const Blogs = () => {
  return (
    <Box position={'relative'}>
      <Navbar />
      <AnimatedPage>
        <Outlet />
      </AnimatedPage>
    </Box>
  );
};

export default Blogs;
