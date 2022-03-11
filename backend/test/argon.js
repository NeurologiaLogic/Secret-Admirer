const argon2 = require("argon2");

const hashing = async () => {
  console.log(await argon2.hash("patrick", "secret"));
  console.log(await argon2.hash("patrick", "secret"));
};
hashing();
