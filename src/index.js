import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import axios from 'axios';
import store from "./Redux/store"
import { ChakraProvider, ColorModeScript, } from '@chakra-ui/react';
import theme from './theme';
// import ScrolltoTop from './Components/ScrolltoTop';
if (localStorage.Donnor) {
  const { token } = JSON.parse(localStorage.Donnor)
  axios.default.headers.common["Authorization"] = `Bearer ${token}`;
}

ReactDOM.render(
  // <React.StrictMode>

  <ChakraProvider theme={theme} >
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    {/* cookie */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* scrollButton implemented  */}
    {/* <ScrolltoTop /> */}
  </ChakraProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);