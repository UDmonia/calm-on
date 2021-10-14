import axios from "axios";

const CashShopAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  },
  addShopUser: (user) => axios.post('http://localhost:4000/api/cashshop/users', user),
  // checkout route
  checkout: (outfitList,total) => axios.post('...',{outfitList,total}),
  // get coins route
  getCoins: ()=> axios.get('...'),
  // get equipped route
  getEquipped: ()=> axios.get('...'),
  // equip or unequip route
  equippedSnapshot: (outfitList)=> axios.put('...', outfitList),
  // get bought items route
  getBought: ()=> axios.get('....')
};

export default CashShopAPI;
