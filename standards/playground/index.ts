import { Binary, TxCallData, TxFinalizedPayload } from "polkadot-api"
import { addressOf, buildAccount, publicKeyOf } from "../../config/account"
import { Chain, magicApi } from "../../config/api"

// This is you account if you do not have one
// use node run generate
const myAccount = addressOf(publicKeyOf())
console.log('My account:', myAccount)

const myLuckyNumber = (nextTokenIn: number = 1) => {
  if (!nextTokenIn) {
    return 0
  }
  
  if (nextTokenIn < 2) { 
    return 1
  }
  // do a sum from your public key
  const lucky = publicKeyOf().reduce((v, acc) => {
    return acc + v
  }, 0)

  // find the collection
  return (lucky % nextTokenIn - 1)
}

console.log('My lucky number:', myLuckyNumber(10))

// We will use AssetHub Paseo, but you can pass any valid
// AssetHub here
// const { api, disconnect } = magicApi('ahpas')

// 1. Read / query data from the Polkadot Assethub

// 2. Process the amount of Collections, and list collections 

// 3. query the current nexttokenid

// 4. for the lucky number query additional stats such as nft floor

// 5. construct remark

// 6. build the batc

// 7. await the TX 

// 8. console log the tx
