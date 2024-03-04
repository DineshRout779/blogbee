import { Container, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import AnimatedPage from '../components/AnimatedPage';

const Profile = () => {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <Container maxW={'1200px'} minH={'100vh'} pb='8'>
          <Text fontSize={'2xl'} fontWeight='bold'>
            Profile
          </Text>
        </Container>
      </AnimatedPage>
    </>
  );
};

export default Profile;
