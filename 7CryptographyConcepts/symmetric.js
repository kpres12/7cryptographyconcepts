const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

/// Cipher
const message = "i like turtles";
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createiv("aes256", key, iv);

/// Ecncrypt
const encryptedMessage =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");

/// Decrypt
const decipher = createDecipheriv("aes256", key, iv);
const decryptedMessage =
  decipher.update(encryptedMessage, "hex", "utf8") + decipher.final("utf8");
