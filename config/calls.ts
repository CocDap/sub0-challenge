import { process } from "std-env"
import { ApiPromise, CHAIN, Chain, magicApi } from "./api"
import { Binary, Enum, TxCallData, TxFinalizedPayload } from "polkadot-api"
import { buildAccount, toMultiAddress } from "./account"
import { MultiAddress } from "@polkadot-api/descriptors"

export function makeRemark({ api }: ApiPromise, memo: string): TxCallData {
	const remark = Binary.fromText(memo)
	// with `api` object construct a onchain remark 
	// the call you are looking for is in the `System` pallet
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	return api.tx.System.remark({ remark }).decodedCall;
}

// DEV: you can edit the types, function params as you want
type CreateCollectionParams = {
	address: string
}
// DEV: you need to implement the following functions
export function createCollection({ api }: ApiPromise, { address }: CreateCollectionParams): TxCallData {
	// with `api` object construct a mint call
	// the call you are looking for is in the `Assets` pallet
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	// TODO: feel free to tune it up
	const config = {
		max_supply: undefined,
		settings: 0n,
		mint_settings: {
			mint_type: {
				type: 'Issuer',
				value: undefined
			} as Enum<{ Issuer: undefined; Public: undefined; HolderOf: number }>,
			start_block: undefined,
			end_block: undefined,
			default_item_settings: 0n,
			price: undefined
		}
	}
	// Address needs to be formatted as MultiAddress
	const admin = toMultiAddress(address)
	const tx = api.tx.Nfts.create({ admin: admin, config: config });
	return tx.decodedCall
	// also do not forget to .decodedCall :)
}

type MintAssetParams = {
	assetId: string
}
export function mintAnAsset({ api }: ApiPromise, params: MintAssetParams): TxCallData {
	const assetId = process.env.ASSET_ID
	// with `api` object construct a mint call
	// the call you are looking for is in the `Assets` pallet
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	throw new Error('[UNIMPLEMENTED] mintAnAsset')
}

// DEV: you can edit the types, function params as you want
export type MintNonFungibleParams = {
	collection: number,
	item: number,
	mint_to: MultiAddress,
	witness_data: {
		owned_item: number | undefined,
		mint_price: bigint | undefined
	} | undefined
}
export function mintNonFungible({ api }: ApiPromise, params: MintNonFungibleParams): TxCallData {
	// with `api` object construct a mint call
	// the call you are looking for is in the `NFTs` pallet
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	return api.tx.Nfts.mint(params).decodedCall
}

export function sendAssetTo({ api }: ApiPromise, recipient: string): TxCallData {
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	// DEV: this is a hint for you
	const who = toMultiAddress(recipient)
	throw new Error('[UNIMPLEMENTED] sendAssetTo')
}

export type SendNonFungibleToParams = { collection: number, item: number, dest: MultiAddress };

export function sendNonFungibleTo({ api }: ApiPromise, params: SendNonFungibleToParams): TxCallData {
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	return api.tx.Nfts.transfer(params).decodedCall;
}

export function makeBatch({ api }: ApiPromise, data: TxCallData | TxCallData[]): TxCallData {

	// with `api` object construct a batch of calls
	// which one you use it is up to you :)
	// pallet name is mentioned in readme
	const calls = Array.isArray(data) ? data : [data];
	return api.tx.Utility.batch_all({ calls }).decodedCall;
}

export function createProxy({ api }: ApiPromise): TxCallData {
	// with `api` object construct a call to create a proxy
	// the call you are looking for is in the `Proxy` pallet
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	throw new Error('[UNIMPLEMENTED] createProxy')
}

type ProxyParams = {
	address: string
}
export function callAsProxy({ api }: ApiPromise, params: ProxyParams): TxCallData {
	// with `api` object construct a call as proxy
	// the call you are looking for is in the `Proxy` pallet
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	throw new Error('[UNIMPLEMENTED] callAsProxy')
}

type CallDerivateParams = {
	index: number
}
export function callAsDerivate({ api }: ApiPromise, params: CallDerivateParams): TxCallData {
	// with `api` object construct a call as proxy
	// the call you are looking for is in the `Utility` pallet
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	throw new Error('[UNIMPLEMENTED] callAsDerivate')
}

// 1. check if data is an array or not
// if yes build a batchAll
// if no build a single call
// to sign a call you need signer
// return call.signAndSubmit(signer);
// DEV: how you gonna pass the api it's up to you
export function submit<T>(
	data: TxCallData | TxCallData[],
	chain: Chain = CHAIN,
): Promise<TxFinalizedPayload> {
	const { api } = magicApi(chain);

	const calls = Array.isArray(data) ? data : [data];

	const batch = api.tx.Utility.batch_all({ calls });
	return batch.signAndSubmit(buildAccount());


	// Sign and submit the transaction

}