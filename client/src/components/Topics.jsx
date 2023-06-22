import { Box, Button, Text, Wrap, WrapItem } from '@chakra-ui/react';

const Topics = () => {
  return (
    <Box>
      <Text fontSize={'xl'} mb='4'>
        Filter by topics
      </Text>
      <Wrap spacing={4}>
        <WrapItem>
          <Button colorScheme='gray' variant='outline'>
            React
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme='gray' variant='outline'>
            JavaScript
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme='gray' variant='outline'>
            Node.js
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme='gray' variant='outline'>
            CSS
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme='gray' variant='outline'>
            REST APIs
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme='gray' variant='outline'>
            TailwindCSS
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme='gray' variant='outline'>
            MongoDB
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme='gray' variant='outline'>
            GraphQL
          </Button>
        </WrapItem>
      </Wrap>
    </Box>
  );
};
export default Topics;
