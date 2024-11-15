import { ahdot, ahpas, testAzero } from "@polkadot-api/descriptors";

// https://metadata.parity.io/?tab=0#/kusama-statemine
export const polkadotConfig = {
	ahpas: {
		wss: "wss://sys.ibp.network/asset-hub-paseo",
		client: ahpas,
	},
	ahdot: {
		wss: "wss://sys.ibp.network/asset-hub-polkadot",
		client: ahdot,
	},
	testAzero: {
		wss: "wss://aleph-zero-testnet-rpc.dwellir.com",
		client: testAzero,
	}
};
