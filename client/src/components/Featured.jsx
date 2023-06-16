import { Container, Flex, Stack, Text } from '@chakra-ui/react';
import BlogCard from './BlogCard';
import BlogCardHorizontal from './BlogCardHorizontal';

const Featured = () => {
  return (
    <Container maxWidth={'1200px'} my='12'>
      <Text as={'h1'} my='8' fontWeight='semibold' fontSize={'2xl'}>
        Featured Posts
      </Text>
      <Flex gap='2em' direction={{ base: 'column', md: 'row' }}>
        <BlogCard />

        <Stack spacing={'4'} flex={'0.6'}>
          <BlogCardHorizontal />
          <BlogCardHorizontal />
          <BlogCardHorizontal />
        </Stack>
      </Flex>
    </Container>
  );
};
export default Featured;
