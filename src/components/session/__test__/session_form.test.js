import {validateEmail}  from "../session_form.js"

const bad_email = "NutsForButts.com"
test("This tests email validation format", () => {
    expect(false).validateEmail(bad_email);
  });