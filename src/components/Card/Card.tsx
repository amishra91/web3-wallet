import ConnectWallet from 'components/ConnectWallet/ConnectWallet';
import { useWeb3 } from 'hooks/useWeb3';

import styles from './card.module.css';

function Card() {
  const { account, provider } = useWeb3();
  let networkName = provider?._network?.name;

  if (networkName == 'homestead') {
    networkName = 'Ethereum mainnet';
  }

  const renderInteractiveElements = () => {
    return <ConnectWallet />;
  };
  return (
    <div className={styles.card}>
      {account ? <h5>Wallet address: {account} </h5> : null}

      {networkName ? <h5>Network: {networkName}</h5> : null}

      {renderInteractiveElements()}
    </div>
  );
}

export default Card;
