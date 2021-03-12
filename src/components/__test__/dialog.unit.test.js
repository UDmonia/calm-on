import React from "react";
import { render } from "@testing-library/react-native";
import Dialog from "../dialog";

describe("Dialog Test Suite", () => {
  test("Dialog snapshot matches", () => {
    const message = { text: "Dummy", style: "" };
    const { toJSON } = render(<Dialog message={message} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
