'use strict'

const {
  generate,
  encrypt, decrypt
} = require('clay-crypto')

{
  const {publicKey, privateKey} = generate('', 2048)
  const encrypted = encrypt('This is the message', privateKey)
  const decrypted = decrypt(encrypted, publicKey)

  console.log(decrypted)
}
