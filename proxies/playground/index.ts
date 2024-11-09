import { Binary, TxCallData, TxFinalizedPayload } from "polkadot-api"
import { addressOf, buildAccount, publicKeyOf } from "../../config/account"
import { Chain, magicApi } from "../../config/api"
import { derive } from "../../derivate"
import { callAsDerivate, callAsProxy, createProxy, mintNonFungible } from "../../config/calls"


// This is you account if you do not have one
// use node run generate
const publicKey = publicKeyOf()
const myAccount = addressOf(publicKey)
console.log('My account:', myAccount)

// We will use AssetHub Paseo, but you can pass any valid
// AssetHub here
const { api, disconnect } = magicApi('ahpas')

// 1. calculate your derived address (index: 1)
const derived = derive(publicKey, 1)

// 2. setup proxy account for it to your own
const proxySetup = createProxy({ api })

// 3. mint the nft to the derived address
// const mint = mintNonFungible({ api }, { collectionId: process.env.COLLECTION_ID || '0' })

// 4. list it on the market as derived
// const derivedList = callAsDerivate({ api }, { address: derived, call: })

// 5. buy it with your EOA
// const buy = 

// OPTIONAL: via derived address use proxy to transfer it back :D

// 6. make a remark with the following format: `task_proxy/address`