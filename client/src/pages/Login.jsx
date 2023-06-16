import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ButtonOutline from '../components/common/ButtonOutline';
import ButtonSolid from '../components/common/ButtonSolid';
import Logo from '../components/Logo';

const bgImg =
  'url("https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';

const Login = () => {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems='center'>
      <Box flex={{ base: '1', md: '0.3' }} p='2em'>
        <Logo />
        <Text as={'h2'} mt='1em' fontSize='larger' fontWeight={'bold'}>
          Nice to see you again
        </Text>

        <Box as={'form'} my={'2em'} maxW='420px'>
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
          <Link to='/forget-password'>
            <Text color='twitter.600' fontSize={'sm'}>
              Forgot password?
            </Text>
          </Link>

          <ButtonSolid type='submit' mt='1em' w='full'>
            Login
          </ButtonSolid>
          <ButtonOutline type='button' mt='1em' w='full'>
            Login as a guest
          </ButtonOutline>
          <Flex fontSize={'sm'} justifyContent={'center'} gap='6px' my='1em'>
            Don&apos;t have an account?{' '}
            <Link to='/signup'>
              <Text color='twitter.600' fontSize={'sm'}>
                Sign up
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
export default Login;
