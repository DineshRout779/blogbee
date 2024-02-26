import { Container, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <Container maxW={'1200px'} minH={'100vh'} mt='8' pb='8'>
        <Text fontSize={'2xl'} fontWeight='bold'>
          About Codetales
        </Text>
      </Container>
    </div>
  );
};

export default About;
