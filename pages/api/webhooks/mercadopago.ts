import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { getMerchantOrder } from "lib/mercadopago";

/* export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { id, topic } = req.query;
    if (topic == "merchant_order") {
      await getMerchantOrder(id);
    }

    res.send("ok");
  },
}); */

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { id, topic } = req.query;
  if (topic == "merchant_order") {
    await getMerchantOrder(id);
  }

  res.send("ok");
}
