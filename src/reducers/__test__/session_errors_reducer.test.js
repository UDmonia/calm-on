import { INTERRUPTION_MODE_ANDROID_DO_NOT_MIX } from "expo-av/build/Audio";
import Reducer from "../session_errors_reducer";

describe("Session Errors Reducer Test", () => {
  test("should return empty state", () => {
    expect(Reducer({ user: "bob" }, { type: "RECEIVE_USER" })).toEqual({});
  });

  test("Should return initial state", () => {
    expect(Reducer({ user: "bob" }, { type: "" })).toEqual({ user: "bob" });
  });

  test("Should return error", () => {
    expect(
      Reducer(
        { user: "bob" },
        { type: "RECEIVE_SESSION_ERRORS", errors: "Error!" }
      )
    ).toEqual("Error!");
  });
});
