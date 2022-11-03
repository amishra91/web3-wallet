import { useEffect } from 'react';
import {
  useWeb3React,
  Web3ReactHooks,
  Web3ReactProvider,
} from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { hooks as metaMaskHooks, metaMask } from 'lib/connector/metaMask';

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

export default function Web3Provider({ children }: App.Components.Container) {
  useEffect(() => {
    metaMask.connectEagerly();
  }, []);

  return (
    <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
  );
}
export const useWeb3 = useWeb3React;
