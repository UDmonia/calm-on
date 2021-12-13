import CashShopAPI from "../util/cashShop_util";
import deviceStorage from "../services/device_storage";

export const COINS = 'COINS';
export const EQUIPPED = 'EQUIPPED';

const setCoins = (coins) => ({type: COINS, coins})
const setOutfitList = (outfitList) => ({type: EQUIPPED, outfitList })

// fetch user info from cashShop api and put it into the store
export const fetchUser = (id) => async (dispatch) => {
  const { data } = await CashShopAPI.fetchUser(id)
  const {coins, equipped} = data;
  dispatch(setCoins(coins));
  dispatch(setOutfitList(equipped));
}

export const setupUser = async (id) =>
  await CashShopAPI.setupUser(id)

// Retrieves token locally and returns the promise
const retrieveToken = () => {
  return deviceStorage.get('jwt');
};

// checkout the current selections
export const buy = ({outfitList, total}) => dispatch => {
  // extract the list of ids from the outfitList object
  let ids = [];
  for (let i = 0; i < outfitList.length; i++) {
    ids.push(outfitList[i].id);
  }
  // call checkout() in CashShopAPI
    // upon successful response, change the state in the cashshop "by accessory" view
};

// get currently equiped
export const getEquipped = ()=> dispatch => {
  // call getEquipped() in CashShopAPI
    // upon successful response, dispatch an action through cash shop reducer and change the currently equiped items in the store

};

// replace the current equiped list of items
export const equippedSnapshot = ({outfitList}) => dispatch => {
  // extract the list of ids from the ouftiList object
  let ids = [];
  for (const key in outfitList) {
    if (outfitList[key]) {
      ids.push(outfitList[key].id);
    }
  }
  // call equippedSnapshot() in CashShopAPI
    // upon successful response, update the state in the wardrobe page

};
