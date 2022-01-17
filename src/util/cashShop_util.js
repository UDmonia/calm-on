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
  checkout: (outfitList,total) => axios.post('...',{outfitList,total}),
  // get back a registered user
  fetchUser: (userId)=> axios.get(getUrl('fetchUser'), {params:{userId}}),
  // get equipped route
  getEquipped: ()=> axios.get('...'),
  // equip or unequip route
  equippedSnapshot: (outfitList)=> axios.put('...', outfitList),
  // get bought items route
  getBought: ()=> axios.get('....'),
  // setup user in cashshop api
  setupUser: (userId) => axios.post(getUrl('setupUser'), {userId})
};

export default CashShopAPI;
