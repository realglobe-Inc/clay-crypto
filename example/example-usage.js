'use strict'

const {
  generate,
  encrypt, decrypt
} = require('clay-crypto')

{
  const { publicKey, privateKey } = generate('', 2048)
  let encrypted = encrypt('This is the message', privateKey)
  let decrypted = decrypt(encrypted, publicKey)

  console.log(decrypted)
}
