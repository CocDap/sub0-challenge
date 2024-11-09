import { blake2AsU8a, decodeAddress, encodeAddress } from '@polkadot/util-crypto'
import { stringToU8a, bnToU8a, u8aConcat, u8aToHex, bnToHex, stringToHex } from '@polkadot/util'
import { Binary, } from "polkadot-api"
import * as ss58 from '@subsquid/ss58'

export function addressOf(address: Uint8Array): string {
  const value = address
  if (!value) {
    return ''
  }
  return ss58.codec('polkadot').encode(value)
}


const base = new Uint8Array([
  ...new TextEncoder().encode('modlpy/utilisuba'),
  ...decodeAddress('14UCmdjK31HFULz1J2pbKuTTnRdEhYXQspZMFPmodUWzpPjh'),
  ...bnToU8a(1, { bitLength: 16 }),
])

const construct: Uint8Array = new Uint8Array([
  ...Binary.fromText('modlpy/utilisuba').asBytes(),
  ...decodeAddress('14UCmdjK31HFULz1J2pbKuTTnRdEhYXQspZMFPmodUWzpPjh'),
  ...Binary.fromHex('0x0100').asBytes()
])

console.log(base)

console.log(construct)


console.log(base == construct)

const derivative = u8aToHex(
  blake2AsU8a(
    new Uint8Array([
      ...new TextEncoder().encode('modlpy/utilisuba'),
      ...decodeAddress('14UCmdjK31HFULz1J2pbKuTTnRdEhYXQspZMFPmodUWzpPjh'),
      ...bnToU8a(1, { bitLength: 16 }),
    ]),
    256
  )
);

console.log(encodeAddress(derivative, 0))
console.log(addressOf(blake2AsU8a((construct), 256, null, true)))
console.log(addressOf(blake2AsU8a((construct), 256, null, true)))


