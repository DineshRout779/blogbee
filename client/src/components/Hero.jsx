import {
  Button,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const textColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.600');
  return (
    <Container maxWidth={'1200px'} w='full'>
      <Flex
        justifyContent={'center'}
        flexDir='column'
        alignItems='center'
        minH={'80vh'}
      >
        <Text
          fontSize={{ base: '36px', md: '40px', lg: '60px' }}
          lineHeight='1.2'
          align='center'
          fontWeight='extrabold'
          my='4'
        >
          Share Your Tech Blogs With <br />
          <Text
            as={'span'}
            bgGradient='linear(to-r, blue.500, purple.600)'
            bgClip='text'
          >
            CodeTales
          </Text>
        </Text>
        <Text
          align='center'
          fontSize={{ base: '16px', md: '18px', lg: '24px' }}
          color={textColor}
          mb='8'
          maxW={{ base: '360px', md: '680px' }}
        >
          Your Ultimate Destination for Tech and Programming. Unleash your
          voice, inspire others, and dive into the world of tech blogging!
        </Text>
        <Flex gap='1em' direction={{ base: 'column', sm: 'row' }}>
          <Link to='/posts'>
            <Button
              variant='outline'
              borderColor='#5186e0'
              color='#5186e0'
              size='lg'
              w='240px'
            >
              Explore Blogs
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
              size='lg'
              w='240px'
            >
              Get started
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Hero;
