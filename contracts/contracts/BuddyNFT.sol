// contracts/CustomNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BuddyNFT is ERC721 {
    struct buddyMetadata {
        uint256 tokenId;
        uint256 timeStamp;
        string tokenURI;
    }

    uint256 tokenId;
    mapping(address => buddyMetadata[]) public ownershipRecord;

    constructor() ERC721("BuddyNFT", "BDY") {}

    function mintToken(address _ownerOfToken, string memory _tokenURI) public {
        _safeMint(_ownerOfToken, tokenId);

        ownershipRecord[_ownerOfToken].push(
            buddyMetadata(tokenId, block.timestamp, _tokenURI)
        );

        tokenId += 1;
    }

    function getBuddiesByAddress(address _owner)
        public
        view
        returns (buddyMetadata[] memory)
    {
        return ownershipRecord[_owner];
    }
}
