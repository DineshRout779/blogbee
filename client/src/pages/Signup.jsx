import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ButtonSolid from '../components/common/ButtonSolid';
import Logo from '../components/Logo';

const bgImg =
  'url("https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';

const Signup = () => {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems='center'>
      <Box flex={{ base: '1', md: '0.3' }} p='2em'>
        <Logo />
        <Text as={'h2'} mt='1em' fontSize='larger' fontWeight={'bold'}>
          Let&apos;s get started!
        </Text>

        <Box as={'form'} my={'2em'} maxW='420px'>
          {/* name */}
          <FormControl my='4'>
            <FormLabel>Full Name</FormLabel>
            <Input type='text' placeholder='Enter your full name' />
          </FormControl>
          {/* email */}
          <FormControl my='4'>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='Enter your email' />
          </FormControl>
          {/* password */}
          <FormControl my='4'>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='Enter your password' />
          </FormControl>

          <ButtonSolid type='submit' mt='1em' w='full'>
            Sign up
          </ButtonSolid>

          <Flex fontSize={'sm'} justifyContent={'center'} gap='6px' my='1em'>
            Already an user?{' '}
            <Link to='/login'>
              <Text color='twitter.600' fontSize={'sm'}>
                Log in
              </Text>
            </Link>
          </Flex>
        </Box>

        <Text textAlign={'center'} mt='1em' p='.5em'>
          &copy; CodeTales 2023, All Rights Reserved.
        </Text>
      </Box>
      <Box
        flex={{ sm: '0', md: '0.7' }}
        bgImage={bgImg}
        bgPosition='center'
        bgRepeat='no-repeat'
        h={'100vh'}
      ></Box>
    </Flex>
  );
};
export default Signup;
