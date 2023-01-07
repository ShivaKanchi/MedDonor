import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript,} from '@chakra-ui/react';
import theme from './theme';
// import ScrolltoTop from './Components/ScrolltoTop';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* cookie */}
        <App />    
      {/* scrollButton implemented  */}
      {/* <ScrolltoTop /> */}
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);