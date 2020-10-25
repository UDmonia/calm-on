import { validateEmail } from "../session_form.js";
import { AsyncStorage } from "react-native";
// const validateEmail = require("../session_form.js");

test("This test is going to email validation format", () => {
  expect(validateEmail("h@gmail.com")).toBeTruthy();
});
