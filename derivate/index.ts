import { blake2b as blake256 } from "@noble/hashes/blake2b"
import { u16 } from "@polkadot-api/substrate-bindings"
import { Binary } from "polkadot-api"
import { addressOf, publicKeyOf } from "../config/account"

export function derive(publicKey: Uint8Array, index: number) {
  const construct: Uint8Array = new Uint8Array([
    ...Binary.fromText('modlpy/utilisuba').asBytes(),
    ...publicKey,
    ...u16.enc(index) // it needs to have lentgh of 16-bits (2 bytes)
  ])
  
  const hash = blake256(construct, {
    dkLen: 32
  })
  
  return addressOf(hash)
}

const publicKey = publicKeyOf()
const derivation = derive(publicKey, 1)
console.log('Derivation:', derivation)
