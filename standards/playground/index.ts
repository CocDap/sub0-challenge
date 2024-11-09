import { Binary, TxCallData, TxFinalizedPayload } from "polkadot-api"
import { addressOf, buildAccount, publicKeyOf } from "../../config/account"
import { Chain, magicApi } from "../../config/api"
import { getCollectionList, getNextCollectionId, getPriceOfItem } from "../../config/queries"

import {
  createCollection,
  makeBatch,
  makeRemark,
  mintNonFungible,
  sendNonFungibleTo,
  MintNonFungibleParams,
  SendNonFungibleToParams,
  submit,
} from "../../config/calls";

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

// console.log('My lucky number:', myLuckyNumber(10))

// We will use AssetHub Paseo, but you can pass any valid
// AssetHub here
// const { api, disconnect } = magicApi('ahpas')

const { api, disconnect } = magicApi('ahdot')



// 2. Process the amount of Collections, and list collections 

const collectionsList = await getCollectionList({api});

// console.log('Collections List:', collectionsList);

const collectionsLength = collectionsList.length;

// console.log('Amount of Collections:', collectionsLength);



// 3. query the current nexttokenid

const currentCollectionId = await getNextCollectionId({api});

// console.log('Current Collection ID:', currentCollectionId);

// 4. or the lucky number query pricess for the NFTs in the collection (id is the lucky number)
const getLuckyNumber = myLuckyNumber(currentCollectionId);

console.log('Lucky Number:', getLuckyNumber);

const priceOfItems = await getPriceOfItem({api}, 71);
console.log('Price of Items:', priceOfItems);

const prices = priceOfItems.map(price => {
  return Number(price) / Math.pow(10, 10);
});


console.log('Price of Items (in tokens):', prices);

disconnect();


const { api: paseoApi, disconnect: paseoBye } = magicApi("ahpas");

const remark = makeRemark({ api }, `task_standards/${myAccount}`);


const tx = await submit([remark]);

console.log("BLOCK:", tx.block);
console.log("EVENTS:", tx.events);
console.log("HASH:", tx.txHash);




