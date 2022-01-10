import axios from "axios";

// Todo(jack): we should be storing Urls in like a React .env or something like that
const getUrl = (action) => `http://ec2-34-215-150-120.us-west-2.compute.amazonaws.com/api/cashshop/${action}`

const CashShopAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  },
  // checkout route
  checkout: async (outfitList,total) => await axios.post('...',{outfitList,total}),
  // get back a registered user
  fetchUser: async (userId)=> await axios.get(getUrl('fetchUser'), {params:{userId}}),
  // get equipped route
  getEquipped: async ()=> await axios.get('...'),
  // equip or unequip route
  equippedSnapshot: async (outfitList)=> await axios.put('...', outfitList),
  // get bought items route
  getBought: async ()=> await axios.get('....'),
  // setup user in cashshop api
  setupUser: async (userId) => await axios.post(getUrl('setupUser'), {userId})
};

export default CashShopAPI;
