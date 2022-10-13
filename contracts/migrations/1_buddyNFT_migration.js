const BuddyNFT = artifacts.require("BuddyNFT");

module.exports = function (deployer) {
  // Command Truffle to deploy the Smart Contract
  deployer.deploy(BuddyNFT);
};
