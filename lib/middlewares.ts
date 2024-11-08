import type { NextApiRequest, NextApiResponse } from "next";
import parseBearerToken from "parse-bearer-token";
import { decode } from "lib/jwt";

function authMiddleware(req: NextApiRequest, res: NextApiResponse, callback) {
  const token = parseBearerToken(req);

  if (!token) {
    res.status(401).json({ message: "no token" });
  }

  const decodedToken = decode(token);

  if (decodedToken) {
    callback(decodedToken);
  } else {
    res.status(401).json({ message: "incorrect token" });
  }
}

export { authMiddleware };
