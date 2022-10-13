import { ethers } from "ethers";
import Web3 from "web3";
import NFTBuddyAbi from "../../contracts/build/contracts/BuddyNFT.json";

const ContractAddress = NFTBuddyAbi.networks[5777].address;

export const mintBuddy = async (URI) => {
  try {
    const provider = new ethers.providers.Web3Provider(Web3.givenProvider);
    const signer = await provider.getSigner();
    const { abi } = NFTBuddyAbi;
    console.log({ ContractAddress, abi });

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
    const provider = new ethers.providers.Web3Provider(Web3.givenProvider);
    const signer = await provider.getSigner();
    const { abi } = NFTBuddyAbi;

    const nftContract = new ethers.Contract(ContractAddress, abi, signer);

    const getBuddies = await nftContract.getBuddiesByAddress(
      window.ethereum.selectedAddress
    );

    return getBuddies;
  } catch (err) {
    console.error(err);
  }
};
