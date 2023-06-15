import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
      bg='#5186e0'
      color='#fcfcfc'
      mt='12'
      py='4em'
      textAlign='center'
    >
      <Text as={'h1'} fontWeight='semibold' fontSize={'4xl'}>
        Integrate CodeTales&apos;s API with your portfolio
      </Text>
      <Text
        as={'p'}
        my='4'
        mb='8'
        color='whiteAlpha.800'
        fontSize={'lg'}
        maxW='668px'
      >
        Having trouble sharing your blogs in your portfolio? CodeTales provide
        rich APIs which can be integrated with your site.
      </Text>
      <Link to='/posts'>
        <Button
          color={'#5186e0'}
          bg='#fff'
          variant='solid'
          _hover={{
            opacity: 0.9,
          }}
          size='lg'
        >
          View the Docs
        </Button>
      </Link>
    </Flex>
  );
};
export default Portfolio;
