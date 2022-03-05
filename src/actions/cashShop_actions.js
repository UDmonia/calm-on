import CashShopAPI from "../util/cashShop_util";
import deviceStorage from "../services/device_storage";

export const COINS = 'COINS';
export const EQUIPPED = 'EQUIPPED';
export const PURCHASED = 'PURCHASED';

const setCoins = (coins) => ({type: COINS, coins})
const setEquipped= (equipped) => ({type: EQUIPPED, equipped })
const setPurchased = (purchased) => ({type: PURCHASED, purchased})

// fetch user info from cashShop api and put it into the store
export const fetchUser = () => async (dispatch) => {
  const { data } = await CashShopAPI.fetchUser()
  dispatch(setCoins(data.coins));
  dispatch(setEquipped(data.equipped));
  dispatch(setPurchased(data.purchased))
}

export const setupUser = (id) =>{
  CashShopAPI.setupUser(id)
    .then(success=>console.log('Done setting up user in cashshop!', success.data))
    .catch(err=>console.log('failed to register user in cashshop!'))
}

// checkout the current selections
export const checkoutCart = ({outfitList, total}) => dispatch => {
  // extract the list of ids from the outfitList object
  let ids = [];
  for (let i = 0; i < outfitList.length; i++) {
    ids.push(outfitList[i].id);
  }
  return CashShopAPI.checkout(ids, total)
    .then(resp=>{
      dispatch(setCoins(resp.data.coins))
      dispatch(setPurchased(resp.data.purchased))
      return 'success'
    })
    .catch(err=>console.log('error with checking out', err))
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
  CashShopAPI.equippedSnapshot(ids)
    .then(resp=>{
      dispatch(setEquipped(resp.data.equipped))
    })
    .catch(err=>console.log('error with equipping or unequipping', err))

};
