import React from "react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, sepolia } from "wagmi/chains";

const chains = [arbitrum, sepolia];
export const projectId = "9b235f5f681cdcc9568adb7b291f36a3";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
export const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function WalletConnectSetup({ children }) {
  return <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>;
}
