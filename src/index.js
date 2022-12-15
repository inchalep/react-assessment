import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { costomTheme } from './styles/theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={costomTheme}>
      <ColorModeScript />
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
serviceWorker.unregister();
reportWebVitals();
