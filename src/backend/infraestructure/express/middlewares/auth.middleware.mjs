import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "#config/config.mjs";

export const auth = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      if (error) {
        return res.status(401).json({ message: "Token is not valid" });
      }

      req.user = user; // contiene el payload del token (ej: id, username)
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
