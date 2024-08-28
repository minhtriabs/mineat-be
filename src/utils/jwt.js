import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/config.js";

const generateAccessToken = (user) => {
  const payload = {
    id: user.id,
    role: user.role,
  };
  const secretKey = jwtConfig.jwtSecret;
  const options = { expiresIn: jwtConfig.jwtExpire };
  try {
    const token = jwt.sign(payload, secretKey, options);
    return token;
  } catch (err) {
    console.error("Lỗi khi tạo JWT:", err);
    throw err;
  }
};
const verifyAccessToken = (user) => {
  const token = generateAccessToken(user);
  jwt.verify(token, secretKey, (err, token) => {
    if (err) {
      return err;
    } else {
      return token;
    }
  });
};
export { generateAccessToken, verifyAccessToken };
