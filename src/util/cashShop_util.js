import axios from "axios";
import { CASHSHOP_URL } from "@env";
console.log("Reading CASHOP_URL", CASHSHOP_URL);

const getUrl = (action) => `${CASHSHOP_URL}/${action}`;

const CashShopAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  },
  // checkout route
  checkout: (purchased, cost) =>
    axios.put(getUrl("checkout"), { purchased, cost }),
  // get back a registered user
  fetchUser: () => axios.get(getUrl("fetchUser")),
  // equip or unequip route
  equippedSnapshot: (equipped) =>
    axios.put(getUrl("equipOrUnequip"), { equipped }),
  // setup user in cashshop api
  setupUser: (userId) => axios.post(getUrl("setupUser"), { userId }),
};

export default CashShopAPI;
