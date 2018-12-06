import pFriday from "../index";
import PremiumFriday from "../PremiumFriday";

test("pFriday instance", () => {
  expect(pFriday).toBeInstanceOf(PremiumFriday);
});
