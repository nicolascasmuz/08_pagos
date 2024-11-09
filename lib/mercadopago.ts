import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: process.env.MP_TOKEN,
});

export async function getMerchantOrder(id) {
  console.log(mercadopago);
  const res = mercadopago.merchant_orders.get(id);
  console.log("res.body: ", res.body);
}
