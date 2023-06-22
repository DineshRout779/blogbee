import {
  AspectRatio,
  Avatar,
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Blog = () => {
  const timeColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');
  const relatedBg = useColorModeValue('gray.100', 'blackAlpha.300');
  return (
    <Box>
      <Navbar />
      <Container maxW={'1200px'} minH={'100vh'} mt='8' pb='8'>
        <Flex gap='8' flexDir={{ base: 'column', md: 'row' }}>
          <Box flex={{ base: 1, md: '0.7' }}>
            <AspectRatio ratio={16 / 9} maxH='360px'>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
            </AspectRatio>
            <Text as='h1' fontSize={'4xl'} my='4' fontWeight='bold'>
              The impact of the technology on workplace: How technology is
              changing
            </Text>

            <HStack gap='4' my='2' mb='8'>
              <Avatar
                name='Dan Abrahmov'
                size='sm'
                src='https://bit.ly/dan-abramov'
              />

              <Text color={timeColor} as='p' fontSize={'md'}>
                Dan Abrahmov • 20 Aug 2022
              </Text>
            </HStack>

            <Box fontSize={'1.2em'}>
              <Text as='p' mb='8'>
                As we continue into the 21st century, it seems like there are
                new technological advances on a daily basis, and those advances
                are beginning to embed themselves into the workplace. Technology
                in the Workplace is truly changing the way we work — we are no
                longer chained to our desks, but rather always have a laptop, a
                tablet or a smartphone in hand.
              </Text>

              <Text as='p' mb='8'>
                There are a few cons to having technology fill a prominent role
                in your business, but the advantages definitely outweigh the
                disadvantages. The primary drawbacks include dependency, the
                constant need to upgrade and possible negative effects on
                workplace relationships. While the benefits include, but are not
                limited to, changing communication, increasing efficiency and
                motivating employees.
              </Text>
              <Text as='p' mb='8'>
                Finding ways to integrate technology in the workplace and work
                environment is key to keeping up with the trends that are
                pushing the workplace to be more and more involved and invested
                in ever-changing technologies.
              </Text>
            </Box>
          </Box>

          <Box flex='0.3' h='fit-content' className='sticky sidebar'>
            <Box p='4' bg={relatedBg} borderRadius='md' mb='8'>
              <Text fontSize={'xl'}>In this article</Text>
            </Box>
            <Box p='4' bg={relatedBg} borderRadius='md' my='8'>
              <Text fontSize={'xl'}>Related articles</Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Blog;
