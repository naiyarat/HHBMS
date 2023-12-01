import './App.css';
import { ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'routes';
import Theme from 'theme';

function App() {
  return (
      <ChakraProvider theme={Theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
