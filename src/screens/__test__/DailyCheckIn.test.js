import React from "react";
import DailyCheckIn from "../DailyCheckIn";
import fetchMock from "fetch-mock";
import { render, fireEvent } from "@testing-library/react-native";
import configureMockStore from "redux-mock-store";
import { useDispatch, useSelector } from "react-redux";

const middlewares = [];
const mockStore = configureMockStore();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("DailyCheckIn Screen Tests", () => {
  afterEach(() => {
    fetchMock.restore();
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  const store = mockStore({ name: "bob" });

  test("Dispatch and UseSelector are called", () => {
    render(<DailyCheckIn navigation={{ navigate: jest.fn() }} />);
    expect(useSelector).toHaveBeenCalled();
    expect(useDispatch).toHaveBeenCalledTimes(1);
  });

  test("UseDispatch is called when emotion is clicked", () => {
    expect(useDispatch).not.toHaveBeenCalled();
    const { queryByTestId } = render(
      <DailyCheckIn navigation={{ navigate: jest.fn() }} />
    );
    expect(useDispatch).toHaveBeenCalledTimes(1);
    const angryButton = queryByTestId("angry-button");
    fireEvent.press(angryButton);
    expect(useDispatch).toHaveBeenCalledTimes(2);
  });
});
