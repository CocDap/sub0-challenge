import { Binary, TxCallData, TxFinalizedPayload } from "polkadot-api";
import { addressOf, buildAccount, publicKeyOf, toMultiAddress } from "../../config/account";
import { Chain, magicApi } from "../../config/api";
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
import { getNextCollectionId } from "../../config/queries"
import { MultiAddress } from "@polkadot-api/descriptors";

// This is you account if you do not have one
// use node run generate
const myAccount = addressOf(publicKeyOf());
console.log("My account:", myAccount);

// We will use AssetHub Paseo, but you can pass any valid
// AssetHub here
const { api, disconnect } = magicApi("ahpas");

const collectionId = await getNextCollectionId({ api });

if (!collectionId) {
  throw new Error("No collection found");
}

// 1. create a new collection
const collection = createCollection({ api }, { address: myAccount });

const mintParams: MintNonFungibleParams = {
  collection: collectionId,
  item: 0,
  mint_to: toMultiAddress(myAccount),
  witness_data: undefined
}
// 2. mint an nft
const mint = mintNonFungible({ api }, mintParams);


const RECIPIENT = "13Qkjn1syvkenidXC1FZQ8bsjs7WdCNpj7u7814eSKfMboNH";
const sendParams: SendNonFungibleToParams = {
  collection: collectionId,
  item: 0,
  dest: toMultiAddress(RECIPIENT)
}
// 3. construct nft send
const send = sendNonFungibleTo({ api }, sendParams);


// 4. construct remark
const remark = makeRemark({ api }, `task_multicall/${myAccount}`);
// 5. build the batc
// const batch = makeBatch({ api }, [collection, mint, send, remark]);

const res = await submit([collection, mint, send, remark]);
// 7. await the TX
// api.txFromCallData(batch).signAndSubmit(buildAccount("13SfhjMAteuWf3BgpNgSeYQGJcYsf11aTnn6CwhPDakzetni"));

// 8. console log the tx

console.log(res.txHash);
disconnect();