## They see me ERCink!

ERC-721 is a standard for NFTs on Ethereum and practically any other ecosystem took it as a standard "interface" for NFTs (except Solana OFC).
My friend Frank wants to deploy his own NFT collection on Polkadot and he is asking me about ERC-721 here.*

**Q how would you help him?**

## Chain of thought

What I need to do? 
Need to update the contract with new metadata URI.

## How so do you have an ERC-721 for NFTs on this Polkadot thing?

Well, yes but it needs some love from you <3 

[vikiival/genink!](https://github.com/vikiival/genink)

## The task

> [!IMPORTANT]
> make sure you have generated private key via `pnpm generate`
> and have it in your `.env`

Your task is to write an ERC-721 contract in ink! for Polkadot with a following functionality:
1. Create an ink! smart contract that would represent ERC-721
2. have an onchain metadata (returing a JSON string)
3. Have a payable mint function

Your script has to contain:
1. Way to deploy of the smart contract
2. Write a code to mint a token (should be mintable for 0.1 unit)
3. create system.remark with following format: task_erc721/address

> [!IMPORTANT]
> at this point you should know how to add chain to papi, I recommend to use AlephZero Testnet

> [!NOTE]
> You need a [papi ink! client](https://papi.how/ink#ink-client)

### I feel like I need more

Be inspired by other popular implementations. Maybe try to rewrite OpenSea SeaDrop into ink!? (InkDrop hehe)

## 👉 To sumbit: [https://voedlx91m5k.typeform.com/to/reN3rKZo](https://voedlx91m5k.typeform.com/to/reN3rKZo) 👈