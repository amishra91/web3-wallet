import { metaMask } from 'lib/connector/metaMask';
import { useWeb3 } from 'hooks/useWeb3';
import styles from './ConnectWallet.module.css';

function ConnectWallet() {
  const { isActive } = useWeb3();

  const connectWallet = () => {
    metaMask.activate();
  };

  const disconnectWallet = () => {
    metaMask.deactivate();
  };
  return (
    <button
      className={styles.connectWalletBtn}
      onClick={!isActive ? connectWallet : disconnectWallet}
    >
      {!isActive ? 'Connect Wallect' : 'Disconnect Wallet'}
    </button>
  );
}

export default ConnectWallet;
