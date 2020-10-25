import { validateEmail } from "../session_form.js";

const goodEmail = "h@gmail.com";
const badEmail = "hgmail.com";

test("Validating a good email format using validateEmail()", () => {
  expect(validateEmail(goodEmail)).toBeTruthy();
});

test("Invalidating a bad email format using validateEmail()", () => {
  expect(validateEmail(badEmail)).toBeFalsy();
});

test("Invalidating an empty string using validateEmail()", () => {
  expect(validateEmail("")).toBeFalsy();
});
