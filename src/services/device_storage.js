import AsyncStorage from "@react-native-community/async-storage";

const deviceStorage = {
  save: async (k, v) => {
    try {
      await AsyncStorage.setItem(k, v);
    } catch (error) {
      console.log("AsyncStorage Error: ", error.message);
    }
  },
  get: async (k) => {
    try {
      return AsyncStorage.getItem(k);
    } catch (error) {
      console.log("AsyncStorage Error: ", error.message);
    }
  },
  delete: async (k) => {
    try {
      await AsyncStorage.removeItem(k);
    } catch (error) {
      console.log("AsyncStorage Error: ", error.message);
    }
  },
};

export default deviceStorage;
