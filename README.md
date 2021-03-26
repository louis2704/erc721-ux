# erc721-ux

## Intro
Your job is to build a simple UX to visualize and manipulate ERC721 Tokens.

This repo contains the references (code + ABI) for two ERC721 tokens deployed on the Rinkeby testnet, which you'll need to use.
- [Song for a City](contracts/SongForACity.sol) ( 0x004a84209a0021b8ff182ffd8bb874c53f65e90e on Rinkeby ) (get the [ABI](build/contracts/SongForACity.json))
- [Tout Doucement](contracts/ToutDoucement.sol) (0x89150a0325ecc830a2304a44de98551051b4f466 on Rinkeby ) (get the [ABI](build/contracts/ToutDoucement.json))

To get started using these tokens, I suggest you use the truffle generated ABI and MyCrypto in order to claim/buy a token for each.

## Tasks list
- Create a repo to host your work
- Create a React / Vue JS app (2 pts)
- Connect your app to the Rinkeby network through Metamask and display the ChainId, the last block number, and user address (2 pts)

For the next 3 questions, use token 'Song for a city'

- Display the name and the total token number (2 pts)
- Display the information (image, name and description) referenced in the Metadata URI for token 0 (2 pts)
- Create a button to claim a new token for the current user(2 pts)
- Create a view for token "Tout Doucement" and create a button to buy a token (this one needs to be paid for) (2 pts)
- Create a view to display all the tokens the current user has on both ERC721 (2 pts)
- Create an interface to transfer a token (2 pts)
- Create a view to visualize all the token holders for each ERC721 (2 pts)
- Create routing + views to display all the tokens held by any address specified in the URL (2 pts)
