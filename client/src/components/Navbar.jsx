import {
  Button,
  Container,
  Flex,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  HamburgerIcon,
  MoonIcon,
  Search2Icon,
  SunIcon,
} from '@chakra-ui/icons';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import Logo from './Logo';
import { useRef } from 'react';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const drawerBg = useColorModeValue('white', 'blackAlpha.500');
  const iconColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');

  return (
    <>
      <Container maxW={'1200px'}>
        <Flex py={'1.5em'}>
          <Flex alignItems={'center'} gap='2em'>
            <Link to='/'>
              <Logo />
            </Link>
            {/* links */}
            <Flex
              color='whiteAlpha.700'
              gap='1em'
              display={{ base: 'none', md: 'none', lg: 'flex' }}
            >
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

          <Button
            mr={'.5em'}
            variant={'ghost'}
            display={{ base: 'block', md: 'none' }}
          >
            <Search2Icon color={iconColor} />
          </Button>

          <Button
            ref={btnRef}
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }}
          >
            <HamburgerIcon />
          </Button>

          <Flex
            alignItems={'center'}
            gap='.4em'
            display={{ base: 'none', sm: 'none', md: 'flex' }}
          >
            <Button
              onClick={toggleColorMode}
              color={iconColor}
              variant={'ghost'}
            >
              {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
            <Button variant={'ghost'}>
              <Search2Icon color={iconColor} />
            </Button>
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
      </Container>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        bg={drawerBg}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={'1em'} />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>

          <DrawerBody>
            <Link to='/blogs'>
              <Text fontSize={'lg'} p='3'>
                Blogs
              </Text>
            </Link>
            <Link to='/popular'>
              <Text fontSize={'lg'} p='3'>
                Popular
              </Text>
            </Link>
            <Link to='/reading-list'>
              <Text fontSize={'lg'} p='3'>
                Reading List
              </Text>
            </Link>
            <Link to='/topics'>
              <Text fontSize={'lg'} p='3'>
                Topics
              </Text>
            </Link>
            <Link to='/write'>
              <Text fontSize={'lg'} p='3'>
                Write Articles
              </Text>
            </Link>

            <Link to='/api-docs'>
              <Text fontSize={'lg'} p='3'>
                API Docs
              </Text>
            </Link>
            <Link to='/about'>
              <Text fontSize={'lg'} p='3'>
                About
              </Text>
            </Link>
            <Link to='/contact'>
              <Text fontSize={'lg'} p='3'>
                Contact
              </Text>
            </Link>

            <Flex p='3' justifyContent={'space-between'}>
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
          </DrawerBody>

          <DrawerFooter>
            <Flex w='full' alignItems={'center'} justifyContent='space-between'>
              <Text>Toggle Theme</Text>
              <Button
                onClick={toggleColorMode}
                color={iconColor}
                variant={'ghost'}
              >
                {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Navbar;
