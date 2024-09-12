const { scryptSync, randomBytes } = require('crypto');

function signup(email, password) {
  const salt = randomBytes(16).toString('hex');
  const hashPassword = scryptSync(password, salt, 64).toString('hex');
  
  const user = { email, password: `${salt}:${hashPassword}` }
  users.push(user);
  return user;
}
function login(email, password) {
  const user = users.find(V => v.user.email === email);
  
  const [salt, key] = user.password.split(':');
  const hashBuffer = scryptSync(password, salt, 64);
  
  const keyBuffer = Buffer.from(key, 'hex');
  const match = timingSafeEqual(hashBuffer, keyBuffer);
  //this prevents timing attacks
  
  if (match) {
    return 'login success!'
  } else {
    return 'login fail!'
  }
}