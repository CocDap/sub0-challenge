## Multisend?

My friend Viki has a problem, he wants to send all his ERC-20s and NFTs from an
old wallet into the new wallet.

He has two types of wallet

- one created with metamask
- one is an smart contract wallet (argent)

**Q how would you help him?**

## Chain of thought

What I need to do?

As an EVM developer I have a few options .. but as we'll see, none of them are that great!

**1. Write a script**

I can write a script that will send all the tokens from one wallet to another.

Pros:

- He will know what is going to happen

Cons:

- Many transaction signatures
- Lot of gas consumed

**2. Write a smart contract**

Basically I can write the same thing as a smart contract. However, batch can be
done in a single transaction.

Pros:

- Less gas consumed
- Just one transaction

Cons:

- I need to deploy SC
- Still need to do approval or sign permits

**3. Multicall/Multisend**

Does what would Viki need.

Pros:

- Just one transaction
- Exacly what Viki needs

Cons:

- Not all wallets support it
- Transaction builder only available for Safe wallet (smart contract account wallet)
- Have you seen the code? 😭

> Use at your own risk
> https://github.com/mds1/multicall?tab=readme-ov-file#batch-contract-writes

https://help.safe.global/en/articles/40841-transaction-builder
https://github.com/safe-global/safe-smart-account/blob/main/contracts/libraries/MultiSend.sol

**4. Just EIP-5792 bro**

Ethereum has new EIP-5792 that allows you to do batch calls. Perfect use case
for this.

Pros:

- All you need in one transaction
- Easy to compose a transaction list via `wagmi`

Const:

- Needs to be supported both by wallet and chain/RPC provider
- Limited amount of wallets

https://www.smartwallet.dev/guides/batch-transactions

## How so do you have a multicall on this Polkadot thing?

Ah ha - with Substrate chains there's a pallet called utility that helps you batch multiple calls in a single transaction.

There is:

- `batch`: 	Send a batch of dispatch calls.
- `batch_all`: 	Send a batch of dispatch calls and atomically execute them. The whole transaction will rollback and fail if any of the calls failed.
- `force_batch`: Send a batch of dispatch calls. Unlike batch, it allows errors and won’t interrupt.

_See [utility pallet docs](https://paritytech.github.io/polkadot-sdk/master/pallet_utility/pallet/dispatchables/)._


Can I use the batch calls in Solidity?
[Yes, on moonbeam](https://docs.moonbeam.network/builders/ethereum/precompiles/ux/batch/#find-a-contract-interactions-call-data)

## Your task

Your task is to write code that will mint one token, one NFT from one address
and sends it to another address in a single transaction.

> [!IMPORTANT] make sure you have generated a private key via `pnpm generate` and
> have it in your `.env`

To achieve this, you must create a single batch call that:

1. Creates an NFT collection on NFTs pallet
2. Mints a NFT using nfts pallet in that collection
3. Sends it to `14UCmdjK31HFULz1J2pbKuTTnRdEhYXQspZMFPmodUWzpPjh`
4. Create `system.remark` with following format: task_multicall/your_address

### Hints!

Part of the implementation is in `config/calls.ts` file. Implement them first so
you can use them in your script.

> [!NOTE]
> [You can find the faucet here](https://faucet.polkadot.io/?parachain=1000)

## I feel like I need more

### Polkadoot let's gooo

Writing/Hacking: Try to come up with a new use case for batch calls in Polkadot.

### I speak Solidity

Implement batch calls in Solidity. You can either use approaches above or come
up with your own.

## 👉 To submit: submit the link to your repo to the [challenge submission form](https://voedlx91m5k.typeform.com/to/reN3rKZo) 👈
