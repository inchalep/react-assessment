import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <Box>
        <Text>Hello</Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
