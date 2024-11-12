import {
  MercadoPagoConfig,
  MerchantOrder,
  Preference,
  Payment,
} from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_TOKEN,
});

const merchantOrder = new MerchantOrder(client);

export async function getMerchantOrder(merchantOrderID) {
  const order = await merchantOrder.get(merchantOrderID);
  return order;
}

const payment = new Payment(client);

export async function getPayment(paymentID) {
  const paymentRes = await payment.get(paymentID);
  return paymentRes;
}

const preference = new Preference(client);

export async function createPreference(body) {
  const myPreference = await preference.create({ body });
  return myPreference;
}
