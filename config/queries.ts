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
  throw new Error('[UNIMPLEMENTED] getCollection')
}

export function getCollectionList({ api }: ApiPromise): Promise<any> {
  // with `api` object construct a query
  // the call you are looking for is in the `Nfts` pallet
  // TODO: remove the throw statement and do return with a query like
  // `return api.` and the call you are looking for
  throw new Error('[UNIMPLEMENTED] getCollectionList')
}