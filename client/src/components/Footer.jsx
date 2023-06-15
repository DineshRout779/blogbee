import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import darkLogo from '../assets/dark-logo.svg';

const Footer = () => {
  return (
    <Container maxW={'1200px'} mt='12'>
      <Flex direction={{ base: 'column', sm: 'row' }}>
        <Box flex={0.3}>
          <Link to='/'>
            <Flex alignItems={'center'} gap='1.5'>
              <Image width={'48px'} height={'48px'} src={darkLogo} alt='logo' />
              <Text fontSize={'2xl'} fontWeight='semibold'>
                CodeTales
              </Text>
            </Flex>
          </Link>
        </Box>
        <VStack spacing='3' p='4' flex='0.3' align={'left'}>
          <Text as='h2' fontWeight={'semibold'} fontSize='xl'>
            Links
          </Text>
          <Link to='/about'>About</Link>
          <Link to='/about'>Features</Link>
          <Link to='/about'>Contact</Link>
        </VStack>
        <Box flex={0.3}>
          <Link to='/'>
            <Flex alignItems={'center'} gap='1.5'>
              <Image width={'48px'} height={'48px'} src={darkLogo} alt='logo' />
              <Text fontSize={'2xl'} fontWeight='semibold'>
                CodeTales
              </Text>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </Container>
  );
};
export default Footer;
