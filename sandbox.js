'use strict'

const { generateRSAKey } = require('cryptico')

console.log(generateRSAKey("hoge", 1024).toJSON())
