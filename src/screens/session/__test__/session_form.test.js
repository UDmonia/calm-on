import { validateEmail, formatDate } from "../session_form.js";

const goodEmail = "h@gmail.com";
const badEmail = "hgmail.com";
const date = new Date();

/**
 * Testing file, in the tests below we are ensuring that our functions
 * return values that we expect them to have.
 */

test("Validating a good email format using validateEmail()", () => {
  expect(validateEmail(goodEmail)).toBeTruthy();
});

test("Invalidating a bad email format using validateEmail()", () => {
  expect(validateEmail(badEmail)).toBeFalsy();
});

test("Invalidating an empty string using validateEmail()", () => {
  expect(validateEmail("")).toBeFalsy();
});

test("Testing invalid date format", () => {
  expect(formatDate(date)).not.toBe(date);
});

test("Testing correct date format", () => {
  // month needs a "+1" since its index starts at 0
  // Date Format: YYYY-MM-DD
  function AddZero(val) {
    // adding 0 if the value is a single digit
    return `0${val}`.slice(-2);
  }

  const correctDateFormat =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    AddZero(date.getDate());
  expect(formatDate(date)).toBe(correctDateFormat);
});
