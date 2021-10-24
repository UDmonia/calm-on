import CashShopAPI from "../util/cashShop_util";
import deviceStorage from "../services/device_storage";

export const EQUIPPED = 'EQUIP';
export const COINS = 'COINS';

export const setCoins = (coins) => (
  {
    type: COINS,
    coins
  }
)

export const setEquipped = (outfitList) => ({
    type: EQUIPPED,
    outfitList
})

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
