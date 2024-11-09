import { ed25519 } from "@noble/curves/ed25519"
import { addressOf, publicKeyOf } from "../config/account"

const privateKey = ed25519.utils.randomPrivateKey()
const address = addressOf(ed25519.getPublicKey(privateKey))
const hex = Buffer.from(privateKey).toString('hex');

console.log('Your Polkadot account is:', address)
console.log('Your private key is:', hex)

console.warn('save to .env file:\n', `PRIVATE_KEY=${hex}`)


const pk = addressOf(publicKeyOf(hex))

console.log('Your public key is:', pk === address ? 'OK' : 'ERROR')