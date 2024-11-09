## Proxies - Smart Accounts / EIP-7702

https://x.com/vikiival/status/1848673774289269045

Sacha asked me what is like the coolest this I have seen in a while.
The one thing that excites me is the smart accounts or EIP-7702.

Proposed by Vitalik, this EIP is a game changer.
It basically allows users to set smart contract code for their account.

So why is it cool?
You can have an adress that can be used as the `mgs.sender` in the contract.

Additionally it can be used to do a transactions on your behalf.
**Q how should I explain it to my friend?**

## Chain of thought

What do we know?

**1. EIP-4337 or paymasters**

We are basically composing transactions which we will pass to the paymaster
and the paymaster will execute and broadcast the transaction on our behalf.

![](https://www.alchemy.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F105223%2F1703861866-how-paymasters-work.jpeg&w=1920&q=75)

Pros:
- Nice user experience
- Sponsored transactions

Cons:
- Paymaster has to be online with funds
- Not very easy to implement and setup


**1. EIP-7702 or paymasters**

EIP-7702 proposes a way for EOAs (Externally Owned Accounts) to gain smart contract capabilities temporarily during transactions. By enabling EOAs to act like smart contract accounts (SCAs) on-demand, it allows for advanced wallet functions like batching, gas sponsorship, and social recovery, improving user experience without a permanent upgrade to SCAs.

Pros:

- Enhanced UX for EOAs: Access to advanced functionalities traditionally reserved for SCAs, like transaction batching and recovery options.
- Forward Compatibility: Seamlessly integrates with ERC-4337 and future account abstraction standards.
- Decentralized Setup: Avoids reliance on centralized relays, reducing centralization risks associated with EIP-3074.

Cons:

- Implementation Complexity: Requires updates in wallet and infrastructure code, making initial setup more complex.
- Security and Flexibility Concerns: Issues around nonce handling and signature validation need careful management to prevent security vulnerabilities


## How so do you have a smart accounts on this Polkadot thing?

Ah ha - with Substrate chains there's a pallet called `proxy` that helps you to make transactions account abstracted

There is:

- `add_proxy`: 	Add ability for given account to call proxy transactions on behalf of the sender.
- `create_pure`: Create a new proxy account that is able to make calls on behalf of the origin account.

Available calls

- `proxy`: Call a function on behalf of a proxy. This will consume an additional allowance from the sender’s account.
- `utility.as_derivative`: Call function as a derivated address 

## The task

> [!IMPORTANT]
> make sure you have generated private key via `pnpm generate`
> and have it in your `.env`

Your task is to washtrade your nfts with proxy accounts.

Your script has to contain:
1. calculate your derived address (index: 1)
2. setup proxy account for it to your own
3. mint the nft to the derived address
4. list it on the market
5. buy it with your EOA
6. make a remark with the following format: `task_proxy/address`

> [!NOTE]
> [You can find the faucet here](https://faucet.polkadot.io/?parachain=1000)
