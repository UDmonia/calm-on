import Reducer from "../session_reducer";

describe("Session Reducer Tests", () => {
  const state = { user: "Bob" };
  test("Should return initial state", () => {
    expect(Reducer(state, { type: "" })).toEqual({ user: "Bob" });
  });

  test("Should return new user state", () => {
    expect(Reducer(state, { type: "RECEIVE_USER", user: "Alice" })).toEqual({
      user: "Alice",
    });
  });

  test("Should logout the user", () => {
    expect(Reducer(state, { type: "LOGOUT_USER" })).toEqual({
      user: null,
    });
  });
});
