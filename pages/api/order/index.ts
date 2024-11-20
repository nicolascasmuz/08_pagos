import type { NextApiRequest, NextApiResponse } from "next";
import { authMiddleware } from "lib/middlewares";
import { User } from "lib/models/user";
import methods from "micro-method-router";

async function handler(token) {
  const user = new User(token.userID);
  await user.pull();

  return user.data;
}

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    authMiddleware(req, res, handler);

    /* const { productID } = req.query;
    res.status(200).json(productID); */
  },
});
