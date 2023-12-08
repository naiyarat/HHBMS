import './App.css';
import { ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'routes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Theme from 'theme';

const queryClient = new QueryClient()

function App() {
  return (
     <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={Theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ChakraProvider>
     </QueryClientProvider>
  );
}

export default App;
