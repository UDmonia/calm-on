import React from "react";
import DailyCheckIn from "../DailyCheckIn";
import Home from "../home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import { useDispatch, useSelector } from "react-redux";
import { checkin } from "../../actions/session_actions";

const middlewares = [];
const Stack = createStackNavigator();

//removes the Animated: `useNativeDriver` is not supported warning
//useNativeDriver is only important when running code on device
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
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
    useSelector.mockClear();
    mockDispatch.mockClear();
    cleanup();
  });

  test("Dispatch and UseSelector are not called", () => {
    render(<DailyCheckIn navigation={{ navigate: jest.fn() }} />);
    expect(useSelector).toHaveBeenCalledTimes(1);
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  test("UseDispatch is called when emotion is clicked", () => {
    expect(mockDispatch).not.toHaveBeenCalled();
    const { queryByTestId } = render(
      <DailyCheckIn navigation={{ navigate: jest.fn() }} />
    );
    fireEvent.press(queryByTestId("angry-button"));
    expect(mockDispatch).not.toHaveBeenCalled();
    fireEvent.press(queryByTestId("scared-button"));
    expect(mockDispatch).not.toHaveBeenCalled();
    fireEvent.press(queryByTestId("curFeeling-button"));
    expect(mockDispatch).toHaveBeenCalled();
  });

  describe("DailyCheckIn Feelings are Dispatched", () => {
    test("useDispatch is called for Happy Feeling", () => {
      expect(mockDispatch).not.toHaveBeenCalled();
      const { queryByTestId } = render(
        <DailyCheckIn navigation={{ navigate: jest.fn() }} />
      );
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("happy-button"));
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("curFeeling-button"));
      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Happy" });
    });
    test("useDispatch is called for Excited Feeling", () => {
      expect(mockDispatch).not.toHaveBeenCalled();
      const { queryByTestId } = render(
        <DailyCheckIn navigation={{ navigate: jest.fn() }} />
      );
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("excited-button"));
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("curFeeling-button"));
      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Excited" });
    });
    test("useDispatch is called for Scared Feeling", () => {
      expect(mockDispatch).not.toHaveBeenCalled();
      const { queryByTestId } = render(
        <DailyCheckIn navigation={{ navigate: jest.fn() }} />
      );
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("scared-button"));
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("curFeeling-button"));
      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Scared" });
    });
    test("useDispatch is called for Worried Feeling", () => {
      expect(mockDispatch).not.toHaveBeenCalled();
      const { queryByTestId } = render(
        <DailyCheckIn navigation={{ navigate: jest.fn() }} />
      );
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("worried-button"));
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("curFeeling-button"));
      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Worried" });
    });
    test("useDispatch is called for Sad Feeling", () => {
      expect(mockDispatch).not.toHaveBeenCalled();
      const { queryByTestId } = render(
        <DailyCheckIn navigation={{ navigate: jest.fn() }} />
      );
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("sad-button"));
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("curFeeling-button"));
      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Sad" });
    });
    test("useDispatch is called for Angry Feeling", () => {
      expect(mockDispatch).not.toHaveBeenCalled();
      const { queryByTestId } = render(
        <DailyCheckIn navigation={{ navigate: jest.fn() }} />
      );
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("angry-button"));
      expect(mockDispatch).not.toHaveBeenCalled();
      fireEvent.press(queryByTestId("curFeeling-button"));
      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(checkin).toHaveBeenCalledWith({ journal: "", mood: "Angry" });
    });
  });

  describe("DailyCheckIn can navigate to Home", () => {
    test("DailyCheckIn Renders", () => {
      const component = (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DailyCheckIn" component={DailyCheckIn} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      );
      const { queryByTestId, queryByText } = render(component);
      expect(queryByText(/How are you feeling/));
      fireEvent.press(queryByTestId("dailycheckin-navigate-button"));
      expect(queryByText(/Scroll through your/)).not.toBeNull();
    });
  });
});
