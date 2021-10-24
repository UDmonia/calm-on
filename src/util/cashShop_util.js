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
  checkout: (outfitList,total) => axios.post('...',{outfitList,total}),
  // get coins route
  fetchCoins: ()=> axios.get(''),
  // get equipped route
  getEquipped: ()=> axios.get('...'),
  // equip or unequip route
  equippedSnapshot: (outfitList)=> axios.put('...', outfitList),
  // get bought items route
  getBought: ()=> axios.get('....'),
  // setup user upon registering
  setupUser: (userId) => axios.post('http://localhost:4000/api/cashshop/setupUser', {userId})
};

export default CashShopAPI;
