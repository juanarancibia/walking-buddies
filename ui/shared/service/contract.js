import { ethers } from "ethers";
import Web3 from "web3";
import NFTBuddyAbi from "../../../contracts/build/contracts/BuddyNFT.json";

const ContractAddress = NFTBuddyAbi.networks[5777].address;

export const mintBuddy = async (address, URI) => {
  try {
    const provider = new ethers.providers.Web3Provider(Web3.givenProvider);
    const signer = await provider.getSigner();
    const { abi } = NFTBuddyAbi;
    console.log({ ContractAddress, abi, address });

    const nftContract = new ethers.Contract(ContractAddress, abi, signer);

    let nftTx = await nftContract.mintToken(address, URI);
    console.log("Minting!", tx);

    let tx = nftTx.wait();
    console.log("Mined!", tx);
  } catch (err) {
    console.error(err);
  }
};

export const getBuddies = async (address) => {
  try {
    const provider = new ethers.providers.Web3Provider(Web3.givenProvider);
    const signer = await provider.getSigner();
    const { abi } = NFTBuddyAbi;

    const nftContract = new ethers.Contract(ContractAddress, abi, signer);

    const getBuddies = await nftContract.getBuddiesByAddress(address);

    return getBuddies;
  } catch (err) {
    console.error(err);
  }
};
