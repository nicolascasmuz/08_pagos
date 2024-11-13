import {
  MercadoPagoConfig,
  MerchantOrder,
  Preference,
  Payment,
} from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken:
    "APP_USR-6350029159038680-111309-f2f8320541147c0565b84b77243e48a9-2095817548",
});

const merchantOrder = new MerchantOrder(client);

export async function getMerchantOrder(merchantOrderID) {
  console.log("merchantOrderID: ", merchantOrderID, typeof merchantOrderID);
  const orderRes = await merchantOrder.get(merchantOrderID);
  console.log("orderRes: ", orderRes);

  return orderRes;
}

const payment = new Payment(client);

export async function getPayment(paymentID) {
  const paymentRes = await payment.get(paymentID);
  return paymentRes;
}

const preference = new Preference(client);

export async function createPreference(body) {
  const preferenceRes = await preference.create({ body });
  return preferenceRes;
}
