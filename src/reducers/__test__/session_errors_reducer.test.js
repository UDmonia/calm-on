import { INTERRUPTION_MODE_ANDROID_DO_NOT_MIX } from "expo-av/build/Audio";
import Reducer from "../session_errors_reducer";

describe("Session Errors Reducer Test", () => {
  const state = { user: "Bob" };
  test("should return empty state", () => {
    expect(Reducer(state, { type: "RECEIVE_USER" })).toEqual({});
  });

  test("Should return initial state", () => {
    expect(Reducer(state, { type: "" })).toEqual({ user: "Bob" });
  });

  test("Should return error", () => {
    expect(
      Reducer(state, { type: "RECEIVE_SESSION_ERRORS", errors: "Error!" })
    ).toEqual("Error!");
  });
});
