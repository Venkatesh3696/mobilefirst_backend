import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
    return hash;
  });
});
