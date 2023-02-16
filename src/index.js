import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import store from "./Redux/store"
import { ChakraProvider, ColorModeScript, } from '@chakra-ui/react';
import theme from './theme';
// import ScrolltoTop from './Components/ScrolltoTop';

if (localStorage.Donor) {
  const { token } = JSON.parse(localStorage.Donor)
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {/* cookie */}
          <App />
          {/* scrollButton implemented  */}
          {/* <ScrolltoTop /> */}
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);