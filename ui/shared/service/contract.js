import { ethers } from "ethers";
import Web3 from "web3";
import BuddyNFT from "../../contracts/BuddyNFT.json";

const ContractAddress = BuddyNFT.networks[5].address;

export const mintBuddy = async (URI) => {
  try {
    const { abi } = BuddyNFT;
    console.log({ ContractAddress, abi });

    const provider = new ethers.providers.Web3Provider(Web3.givenProvider);
    const signer = await provider.getSigner();

    const nftContract = new ethers.Contract(ContractAddress, abi, signer);

    let nftTx = await nftContract.mintToken(
      window.ethereum.selectedAddress,
      URI
    );

    let tx = nftTx.wait();
    console.log("Mined!", tx);

    return tx;
  } catch (err) {
    console.error(err);
  }
};

export const getBuddies = async () => {
  try {
    console.log({ ContractAddress, abi });
    const { abi } = BuddyNFT;

    const provider = new ethers.providers.Web3Provider(Web3.givenProvider);
    const signer = await provider.getSigner();

    const nftContract = new ethers.Contract(ContractAddress, abi, signer);

    const getBuddies = await nftContract.getBuddiesByAddress(
      window.ethereum.selectedAddress
    );

    return getBuddies;
  } catch (err) {
    console.error(err);
  }
};
