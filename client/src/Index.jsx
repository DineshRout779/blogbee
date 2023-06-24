import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import theme from './theme.js';
import { useState } from 'react';
import AppRoutes from './routes/AppRoutes.jsx';
import './index.css';

const Index = () => {
  const colorMode = localStorage.getItem('chakra-ui-color-mode');
  const [colorScheme, setColorScheme] = useState(colorMode);
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <AppRoutes />
        </ChakraProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Index;
