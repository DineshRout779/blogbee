import { Button, Container, Flex, Input, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import darkLogo from '../assets/dark-logo.svg';

const Navbar = () => {
  return (
    <Container maxW={'1200px'}>
      <Flex py={'1em'}>
        <Flex alignItems={'center'} gap='2em'>
          <Link to='/'>
            <Flex alignItems={'center'} gap='1.5'>
              <img width={'48px'} height={'48px'} src={darkLogo} alt='logo' />
              <Text fontSize={'2xl'} fontWeight='semibold'>
                CodeTales
              </Text>
            </Flex>
          </Link>
          <Flex gap='1em'>
            <Link to='/popular'>
              <Text fontSize={'lg'} p='3'>
                Popular
              </Text>
            </Link>
            <Link to='/reading-list'>
              <Text fontSize={'lg'} p='3'>
                Reading list
              </Text>
            </Link>
            <Link to='/topics'>
              <Text fontSize={'lg'} p='3'>
                Topics
              </Text>
            </Link>
          </Flex>
        </Flex>
        <Spacer />

        <Flex alignItems={'center'} gap='2em'>
          <Input variant='filled' placeholder='Search a topic' />
          <Flex alignItems={'center'} gap='1em'>
            <Link to='/login'>
              <Button borderColor='#5186e0' color='#5186e0' variant='outline'>
                Login
              </Button>
            </Link>
            <Link to='/signup'>
              <Button
                borderColor='#5186e0'
                color={'#fff'}
                bg='#5186e0'
                variant='solid'
                _hover={{
                  bg: '#1246a1',
                  borderColor: '#1246a1',
                }}
              >
                Get Started
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Navbar;
