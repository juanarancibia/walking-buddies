import { Web3ReactProvider } from "@web3-react/core";
import { useState } from "react";
import Web3 from "web3";
import BuddiesContainer from "../components/BuddiesContainer";
import BuddiesGallery from "../components/BuddiesGallery";
import ParticlesBackground from "../components/ParticlesBackground";
import Title from "../components/Title";
import { AnimatePresence } from "framer-motion";
import { MetaMaskProvider } from "../shared/hooks/useMetaMask";
import { BuddiesUpdatedContextProvider } from "../shared/context/BuddiesUpdatedContext";
import Modal from "../components/generic/Modal";

export default function Home() {
  const getLibrary = (provider, connector) => {
    return new Web3(provider);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <BuddiesUpdatedContextProvider>
          <Title />
          <BuddiesContainer
            handleModalOpen={() =>
              modalOpen ? setModalOpen(false) : setModalOpen(true)
            }
          />
          <ParticlesBackground />
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal
                modalOpen={modalOpen}
                handleClose={() => setModalOpen(false)}
              >
                <BuddiesGallery closeModal={() => setModalOpen(false)} />
              </Modal>
            )}
          </AnimatePresence>
        </BuddiesUpdatedContextProvider>
      </MetaMaskProvider>
    </Web3ReactProvider>
  );
}
