import bs58check from 'bs58check'

/*
  This script uses version bytes as described in SLIP-132
  https://github.com/satoshilabs/slips/blob/master/slip-0132.md
*/

const prefixes = new Map([
  ['xpub', '0488b21e'],
  ['ypub', '049d7cb2'],
  ['Ypub', '0295b43f'],
  ['zpub', '04b24746'],
  ['Zpub', '02aa7ed3'],
  ['tpub', '043587cf'],
  ['upub', '044a5262'],
  ['Upub', '024289ef'],
  ['vpub', '045f1cf6'],
  ['Vpub', '02575483'],
])

/*
 * This function takes an extended public key (with any version bytes, it doesn't need to be an xpub)
 * and converts it to an extended public key formatted with the desired version bytes
 * @param xpub: an extended public key in base58 format. Example: xpub6CpihtY9HVc1jNJWCiXnRbpXm5BgVNKqZMsM4XqpDcQigJr6AHNwaForLZ3kkisDcRoaXSUms6DJNhxFtQGeZfWAQWCZQe1esNetx5Wqe4M
 * @param targetFormat: a string representing the desired prefix; must exist in the "prefixes" mapping defined above. Example: Zpub
*/
export default function changeVersionBytes(xpub, targetFormat) {
  if (!prefixes.has(targetFormat)) {
    return 'Invalid target version'
  }

  // trim whitespace
  xpub = xpub.trim()

  try {
    var data = bs58check.decode(xpub)
    data = data.slice(4)
    data = Buffer.concat([Buffer.from(prefixes.get(targetFormat), 'hex'), data])
    return bs58check.encode(data)
  } catch (err) {
    return 'Invalid extended public key'
  }
}
