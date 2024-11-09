import { ApiPromise } from "./api"

export function getNextCollectionId({ api }: ApiPromise): Promise<number | undefined> {
  // with `api` object construct a query
  // the call you are looking for is in the `Nfts` pallet
  // TODO: remove the throw statement and do return with a query like
  // `return api.` and the call you are looking for
  return api.query.Nfts.NextCollectionId.getValue();
}

export function getCollection({ api }: ApiPromise, collectionId: number): Promise<any> {
  // with `api` object construct a query
  // the call you are looking for is in the `Nfts` pallet
  // TODO: remove the throw statement and do return with a query like
  // `return api.` and the call you are looking for
  return api.query.Nfts.Collection.getValue(collectionId);
}

export function getCollectionList({ api }: ApiPromise): Promise<any> {
  // with `api` object construct a query
  // the call you are looking for is in the `Nfts` pallet
  // TODO: remove the throw statement and do return with a query like
  // `return api.` and the call you are looking for
  return api.query.Nfts.Collection.getEntries();
}


export async function getPriceOfItem({ api }: ApiPromise, collectionId: number): Promise<any> {

  let priceOfItems: bigint[] =[];
  let items = await api.query.Nfts.Item.getEntries(collectionId);

  for (let item of items) {

    const itemId = item.keyArgs[1];
    console.log('Item ID:', itemId);
    const price = await api.query.Nfts.ItemPriceOf.getValue(collectionId, itemId);
    if (price === undefined) {
      priceOfItems.push(BigInt(0));
    } else {
    priceOfItems.push(price?.[0]);
    }
  }

  return priceOfItems;

}

