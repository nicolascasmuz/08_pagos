import { generate, decode } from "./jwt";
import test from "ava";

test("jwt encode/decode", (t) => {
  const token = { email: "nicocasmuz@fastmail.com" };
  const encodedToken = generate(token);
  const decodedToken = decode(encodedToken);

  console.log("token: ", token);
  console.log("decodedToken: ", decodedToken);

  t.deepEqual(token, decodedToken);
});
