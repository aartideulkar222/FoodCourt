import { Flex } from '@chakra-ui/react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body/body';
function App() {
  return (
    <div className="App">
      <Flex w='full' p='0.5rem 2rem 0.5rem 2rem' direction='column'>
      <Header/>
      <Body/>
      </Flex>
    </div>
  );
}

export default App;
