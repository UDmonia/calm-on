import axios from "axios";

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
  // get coins route
  fetchUser: async (userId)=> await axios.get('http://localhost:4000/api/cashshop/fetchUser', {params:{userId}}),
  // get equipped route
  getEquipped: async ()=> await axios.get('...'),
  // equip or unequip route
  equippedSnapshot: async (outfitList)=> await axios.put('...', outfitList),
  // get bought items route
  getBought: async ()=> await axios.get('....'),
  // setup user upon registering
  setupUser: async (userId) => await axios.post('http://localhost:4000/api/cashshop/setupUser', {userId})
};

export default CashShopAPI;
