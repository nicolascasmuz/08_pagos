import {
  MercadoPagoConfig,
  MerchantOrder,
  Preference,
  Payment,
} from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken:
    "TEST-8588826682518887-110711-70ae810f094ca26055ba8d2875ba3603-58380578",
  options: { timeout: 5000, idempotencyKey: "abc" },
});

const merchantOrder = new MerchantOrder(client);

export async function getMerchantOrder(merchantOrderID) {
  console.log("merchantOrderID: ", merchantOrderID, typeof merchantOrderID);
  const orderRes = await merchantOrder.get(merchantOrderID);
  console.log();
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
