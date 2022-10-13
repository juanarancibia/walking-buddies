const { assert, expect } = require("chai");

const CustomNFT = artifacts.require("CustomNFT");

contract("CustomNFT", (accounts) => {
  it("should increment the number of tokens", async () => {
    let [alice] = accounts;
    const contractInstance = await CustomNFT.new();

    const newItemId = await contractInstance.mintGalleryItem.call(
      "https://i.pinimg.com/564x/07/ea/25/07ea2592a56169ba7c726a561a5bf11c.jpg",
      { from: alice }
    );

    assert.equal(newItemId, 0, `Id should be ${newItemId}`);
  });
});
