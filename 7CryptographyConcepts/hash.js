const { createHash } = require('crypto');
// create a string hash
function hash(input) {
  return createHash('sha256').update) digest('hex');
}

// Compare two hashed passwords

let password = 'hi-mom';
const hash1= hash(password);

// ... some time later
password = 'hi-mom';
const hash2 = hash(password);
const match = hash1 === hash2;

console.log(match); // true
