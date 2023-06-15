import { Button, Container, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Container maxWidth={'1200px'} w='full'>
      <Flex
        justifyContent={'center'}
        flexDir='column'
        alignItems='center'
        minH={'80vh'}
      >
        <Text
          fontSize={'6xl'}
          lineHeight='1.2'
          align='center'
          fontWeight='extrabold'
          my='4'
        >
          Share Your Tech Blogs With <Text color='#5186e0'>CodeTales</Text>
        </Text>
        <Text
          align='center'
          fontSize={'xl'}
          color='blackAlpha.700'
          mb='8'
          maxW={'688px'}
        >
          Your Ultimate Destination for Tech and Programming. Unleash your
          voice, inspire others, and dive into the world of tech blogging!
        </Text>
        <Flex gap='1em'>
          <Link to='/write'>
            <Button
              borderColor='#5186e0'
              color={'#5186e0'}
              variant='outline'
              _hover={{
                bg: '#e4e8ed',
              }}
              size='lg'
            >
              Write Blog
            </Button>
          </Link>
          <Link to='/posts'>
            <Button
              borderColor='#5186e0'
              color={'#fff'}
              bg='#5186e0'
              variant='solid'
              _hover={{
                bg: '#1246a1',
                borderColor: '#1246a1',
              }}
              size='lg'
            >
              Explore Blogs
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Hero;
