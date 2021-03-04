import React from "react";
import DailyCheckIn from "../DailyCheckIn";
import fetchMock from "fetch-mock";
import { render, fireEvent } from "@testing-library/react-native";
import configureMockStore from "redux-mock-store";
import { useDispatch, useSelector } from "react-redux";
import { checkin } from "../../actions/session_actions";

const middlewares = [];
const mockStore = configureMockStore();
const store = mockStore({ name: "bob" });

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("../../actions/session_actions", () => ({
  __esModule: true,
  checkin: jest.fn(),
}));

describe("DailyCheckIn Screen Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    fetchMock.restore();
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  // test("Dispatch and UseSelector are called", () => {
  //   render(<DailyCheckIn navigation={{ navigate: jest.fn() }} />);
  //   expect(useSelector).toHaveBeenCalled();
  //   expect(useDispatch).toHaveBeenCalledTimes(1);
  // });

  test("UseDispatch is called when emotion is clicked", () => {
    expect(useDispatch).not.toHaveBeenCalled();
    const { queryByTestId } = render(
      <DailyCheckIn navigation={{ navigate: jest.fn() }} />
    );
    expect(useDispatch).toHaveBeenCalledTimes(1);
    fireEvent.press(queryByTestId("angry-button"));
    expect(useDispatch).toHaveBeenCalledTimes(2);
    fireEvent.press(queryByTestId("scared-button"));
    expect(useDispatch).toHaveBeenCalledTimes(3);
    fireEvent.press(queryByTestId("curFeeling-button"));
    // expect(useDispatch).toHaveBeenCalledTimes(4);
  });

  // describe("DailyCheckIn Feelings are Dispatched", () => {
  //   test("useDispatch is called for Happy Feeling", () => {
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     const { queryByTestId } = render(
  //       <DailyCheckIn navigation={{ navigate: jest.fn() }} />
  //     );
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("happy-button"));
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("curFeeling-button"));
  //     expect(useDispatch).toHaveBeenCalledTimes(1);
  //     expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Happy" });
  //   });
  //   test("useDispatch is called for Excited Feeling", () => {
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     const { queryByTestId } = render(
  //       <DailyCheckIn navigation={{ navigate: jest.fn() }} />
  //     );
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("excited-button"));
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("curFeeling-button"));
  //     expect(useDispatch).toHaveBeenCalledTimes(1);
  //     expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Excited" });
  //   });
  //   test("useDispatch is called for Scared Feeling", () => {
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     const { queryByTestId } = render(
  //       <DailyCheckIn navigation={{ navigate: jest.fn() }} />
  //     );
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("scared-button"));
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("curFeeling-button"));
  //     expect(useDispatch).toHaveBeenCalledTimes(1);
  //     expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Scared" });
  //   });
  //   test("useDispatch is called for Worried Feeling", () => {
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     const { queryByTestId } = render(
  //       <DailyCheckIn navigation={{ navigate: jest.fn() }} />
  //     );
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("worried-button"));
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("curFeeling-button"));
  //     expect(useDispatch).toHaveBeenCalledTimes(1);
  //     expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Worried" });
  //   });
  //   test("useDispatch is called for Sad Feeling", () => {
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     const { queryByTestId } = render(
  //       <DailyCheckIn navigation={{ navigate: jest.fn() }} />
  //     );
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("sad-button"));
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("curFeeling-button"));
  //     expect(useDispatch).toHaveBeenCalledTimes(1);
  //     expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Sad" });
  //   });
  //   test("useDispatch is called for Angry Feeling", () => {
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     const { queryByTestId } = render(
  //       <DailyCheckIn navigation={{ navigate: jest.fn() }} />
  //     );
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("angry-button"));
  //     expect(useDispatch).not.toHaveBeenCalled();
  //     fireEvent.press(queryByTestId("curFeeling-button"));
  //     expect(useDispatch).toHaveBeenCalledTimes(1);
  //     expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Angry" });
  //   });
  // });
});
