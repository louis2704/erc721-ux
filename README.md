# erc721-ux

## Intro
Your job is to build a simple UX to visualize and manipulate ERC721 Tokens.

This repo contains the references (code + ABI) for two ERC721 tokens deployed on the Rinkeby testnet, which you'll need to use.
- [Song for a City](contracts/SongForACity.sol) ( 0x004a84209a0021b8ff182ffd8bb874c53f65e90e on Rinkeby ) (get the [ABI](build/contracts/SongForACity.json))
- [Tout Doucement](contracts/ToutDoucement.sol) (0x25228Ed636Ceb5137E8B85eB81cb2f9c2B1136D9 on Rinkeby ) (get the [ABI](build/contracts/ToutDoucement.json))
- [Fragment](contracts/Fragment.sol) (0x623F747Ca2eEbb700DA0260B50B0d2e0c9AfBEaD on Rinkeby ) (get the [ABI](build/contracts/Fragment.json))
- [Fragment claimer](contracts/fragmentClaimer.sol) (0x558E1c1b00946E5A726bF88d570730E9bdd29dc3 on Rinkeby ) (get the [ABI](build/contracts/fragmentClaimer.json))


To get started using these tokens, I suggest you use the truffle generated ABI and MyCrypto in order to claim/buy a token for each.

## Tasks list
### Creating a js app and connecting to Ethereum
- Create a repo to host your work
- Create a React / Vue JS app and create a page /chain-info(2 pts)
- Connect your app to the Rinkeby network through Metamask and display the ChainId, the last block number, and user address with view /chain-info (2 pts)

### Calling read and write functions
- Create a page /songForACity
- Display the name and the total token number (2 pts)
- Create a button to claim a new token for the current user(3 pts)
- Create a page /songForACity/{token number}
- Display the information (image, name and description) referenced in the Metadata URI for token {token number} (2 pts)

### Paying through functions
- Create a page /toutDoucement
- Display the minimum token price, and create a button to buy a token (this one needs to be paid for) (2 pts)
- Create a page /toutDoucement/{user address}
- Display all the tokens {user address} has on tout doucement (3 pts)

### Calling a minter with a signature
- Create a page /fragment
- Create a button to mint a token. Read the contract; use [signature data](claimerV1-tools) to call function `claimAToken()` on [fragment claimer](contracts/fragmentClaimer.sol) correctly (4 pts)
