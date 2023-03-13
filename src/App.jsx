import Navbar from "./components/Navbar";

import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Web3Modal } from "@web3modal/react";
import WalletConnectSetup, { ethereumClient } from "./components/WalletConnect";

export default function App() {
  return (
    <>
      <WalletConnectSetup>
        <LazyMotion features={domAnimation}>
          <Navbar />
        </LazyMotion>
      </WalletConnectSetup>
      <Web3Modal
        projectId="9b235f5f681cdcc9568adb7b291f36a3"
        ethereumClient={ethereumClient}
      />
    </>
  );
}
