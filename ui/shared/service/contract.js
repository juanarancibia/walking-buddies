import { ethers } from "ethers";
import Web3 from "web3";
import NFTBuddyAbi from "../../contracts/abis/BuddyNFT.json";

const ContractAddress = "0x97d8AaB6568b1F32b61326c334075bDEc80739f8";

export const mintBuddy = async (address, URI) => {
  try {
    console.log(ContractAddress);
    const provider = new ethers.providers.Web3Provider(Web3.givenProvider);
    const signer = await provider.getSigner();
    const { abi } = NFTBuddyAbi;

    const nftContract = new ethers.Contract(ContractAddress, abi, signer);

    let nftTx = await nftContract.mintToken(
      "0xE955502E3a2926E731b02eAadE504CA143f41e74",
      URI
    );
    console.log("Minting...");

    let tx = nftTx.wait();
    console.log("Mined!", tx);
  } catch (err) {
    console.error(err);
  }
};
