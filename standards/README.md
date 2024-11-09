## Pallets as the standard interface

My friend Joe made a collection during the NFT craze in 2021 and he found out that the metadata are stored on centralized S3 storage. Dev is gone and data from the S3 is not accessible anymore. Luckily he has backups. 

**Q how would you help him?**

## Chain of thought

What I need to do? 

As an EVM developer I have a work

**1. Observe the smart contract**

If the dev at least verified the contract I can see the metadata URI and check the implementation.

If not I am hoping that source code is stored somewhere. 

Otherwise it would be just trial and error.

**2. Check if and how metadata update is implemented**

[Depends on implementation](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#ERC721-_setTokenURI-uint256-string-) token metadata is done via `concat(baseUri, '/', tokenId)`

`_setTokenURI(uint256 tokenId, string _tokenURI)`

`_setBaseURI(string baseURI_)`

and can be updated via `setBaseUri` function.

Some NFTs has a specific function for updating metadata.

**3. Decide on the strategy**

So we will need to pin directory on IPFS with images, 
Then we need to take images, construct new metadata and upload it to IPFS.

Need to update the contract with new metadata URI.

## How so do you have metadaata for NFTs on this Polkadot thing?

yes we do.
There is currently a stardard pallet called `nfts` that allows us to update

- collection metadata
- token metadata

Base URI implementation is missing but clever devs also figured it out.

Why is this important?

It is easier to build an indexing service/processing service as we are aware that there is a thing for it

## The task

Your task is to write a code that will read data from AssetHub Polkadot about NFTs and submits the result to the paseo asset hub

> [!NOTE]
> Before you start hacking rund `npx papi add ahdot -n polkadot_asset_hub`
> this will add polkadot asset hub + ofc you have to add it to the config

Your script has to contain:
1. Read / query data from the Polkadot Assethub
2. Process the amount of Collections, and list collections 
3. query the current nexttokenid
4. for the lucky number query additional stats such as nft floor
5. create onchain remark with `blockNumber/<stats>`
6. create remark with following format: task_multicall/address

> [!IMPORTANT]
> make sure you have generated private key via `pnpm generate`
> and have it in your `.env`
> [You can find the faucet here](https://faucet.polkadot.io/?parachain=1000)

### I feel like I need more

Your task is to extend a support for `kodadot/stick` to support Paseo AssetHub / other testnet. 
You will get an special merch and stickers

## 👉 To sumbit: [https://voedlx91m5k.typeform.com/to/reN3rKZo](https://voedlx91m5k.typeform.com/to/reN3rKZo) 👈