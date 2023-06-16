import { Box, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

function App() {
  const bg = useColorModeValue('white', 'blackAlpha.500');
  return (
    <Box bg={bg}>
      <Outlet />
    </Box>
  );
}

export default App;
