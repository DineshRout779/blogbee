import {
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';

const BlogCardHorizontal = () => {
  return (
    <Flex direction={{ base: 'column', sm: 'row' }}>
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Caffe Latte'
        borderRadius={'.5rem'}
      />

      <Stack p={{ sm: '0 1em', md: '1em' }} py={{ base: '1em' }}>
        <Heading size='md'>The perfect latte</Heading>

        <Text py='2'>
          Caffè latte is a coffee beverage of Italian origin made with espresso
          and steamed milk.
        </Text>
        <HStack spacing={4}>
          <Tag size={'md'} variant='outline' colorScheme='teal'>
            JavaScript
          </Tag>
          <Tag size={'md'} variant='outline' colorScheme='teal'>
            React
          </Tag>
        </HStack>
      </Stack>
    </Flex>
  );
};
export default BlogCardHorizontal;
