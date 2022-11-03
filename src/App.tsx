import Card from './components/Card/Card';
import Web3Provider from 'hooks/useWeb3';

import './App.css';

function App() {
  return (
    <Web3Provider>
      <Card />
    </Web3Provider>
  );
}

export default App;
