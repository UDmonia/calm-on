import axios from "axios";
import { CASHSHOP_URL } from "@env";

// Todo(jack): we should be storing Urls in like a React .env or something like that
const getUrl = (action) => `${CASHSHOP_URL}/${action}`

const CashShopAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  },
  // checkout route
  checkout: (purchased,cost) => axios.put(getUrl('checkout'),{purchased,cost}),
  // get back a registered user
  fetchUser: ()=> axios.get(getUrl('fetchUser')),
  // get equipped route
  getEquipped: ()=> axios.get('...'),
  // equip or unequip route
  equippedSnapshot: (equipped)=> axios.put(getUrl('equipOrUnequip'), {equipped}),
  // get bought items route
  getBought: ()=> axios.get('....'),
  // setup user in cashshop api
  setupUser: () => axios.post(getUrl('setupUser'))
};

export default CashShopAPI;
