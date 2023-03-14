import Navbar from "./components/Navbar";
import WalletConnectSetup, {
  ethereumClient,
  projectId,
} from "./components/WalletConnect";

import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Web3Modal } from "@web3modal/react";

export default function App() {
  return (
    <>
      <WalletConnectSetup>
        <LazyMotion features={domAnimation}>
          <Navbar />
        </LazyMotion>
      </WalletConnectSetup>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-font-family": "Oswald, sans-serif",
          "--w3m-background-color": "#000",
          "--w3m-accent-color": "#000",
          "--w3m-logo-image-url":
            "https://ik.imagekit.io/domsan/Logo_0vBSw9piY.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662803005580",
          "--w3m-text-medium-regular-size": "18px",
          "--w3m-text-medium-regular-text-transform": "uppercase",
        }}
      />
    </>
  );
}
