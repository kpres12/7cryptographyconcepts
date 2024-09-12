const { generateKeyPairSync} = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa');{
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: 'spki', // recommended to be 'spki' by the Node.js docs
    format: 'pem',
},
  privateKeyEncoding: {
    type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
    format: 'pem',
    ''cipher: 'aes-256-cbc', // this is optional
    ''passphrase: 'top secret', // this is optional
  },
});

console.log(privateKey);
console.log(publicKey);

module.exports = {
  privateKey, publicKey
}
