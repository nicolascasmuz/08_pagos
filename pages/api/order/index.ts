import type { NextApiRequest, NextApiResponse } from "next";
import { authMiddleware } from "lib/middlewares";
import { User } from "lib/models/user";
import methods from "micro-method-router";
import { Order } from "lib/models/order";
import { createPreference } from "lib/mercadopago";

async function handler(token) {
  const user = new User(token.userID);
  await user.pull();

  return { userData: user.data, userID: token.userID };
}

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    const { productID } = req.query;
    const { userID } = await authMiddleware(req, res, handler);

    const { orderData, orderID } = await Order.createNewOrder({
      aditional_info: req.body,
      productID,
      userID,
    });

    const preference = await createPreference(req.body);

    res.status(200).json({ init_point: preference.init_point });
  },
});
