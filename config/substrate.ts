import { ahpas } from "@polkadot-api/descriptors";

// https://metadata.parity.io/?tab=0#/kusama-statemine
export const polkadotConfig = {
	ahpas: {
		wss: "wss://sys.ibp.network/asset-hub-paseo",
		client: ahpas,
	}
};
