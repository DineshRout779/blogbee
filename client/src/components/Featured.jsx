import { Container, Flex, Spinner, Stack, Text } from '@chakra-ui/react';
import { useBlogs } from '../hooks/useBlogs';
import BlogCard from './BlogCard';
import BlogCardHorizontal from './BlogCardHorizontal';

const Featured = () => {
  const {
    state: { blogs, loading, error },
  } = useBlogs();

  if (loading) {
    return (
      <Flex
        minH={'100vh'}
        flexDir='column'
        justifyContent='center'
        alignItems={'center'}
      >
        <Spinner size='lg' />
        <Text my='4'>Fetching blogs...</Text>
      </Flex>
    );
  }

  if (error) {
    return <p>Some error occurred!</p>;
  }

  return (
    <Container maxWidth={'1200px'} my='12'>
      <Text as={'h1'} my='8' fontWeight='semibold' fontSize={'2xl'}>
        Featured Posts
      </Text>
      <Flex gap='2em' direction={{ base: 'column', md: 'row' }}>
        <BlogCard blog={blogs[0]} />

        <Stack spacing={'4'} flex={'0.6'}>
          {blogs.map((blog) => (
            <BlogCardHorizontal blog={blog} key={blog._id} />
          ))}
        </Stack>
      </Flex>
    </Container>
  );
};
export default Featured;
