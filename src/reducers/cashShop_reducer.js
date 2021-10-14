import { EQUIP, CASHSHOP_USER } from "../actions/cashShop_actions";

const cashShopReducer = (state = { equipped: [] }, action) => {
  switch (action.type) {
    case EQUIP:
      return { equipped: action.outfitList };
    case CASHSHOP_USER:
      return {user: action.user}
    default:
      return state;
  }
};

export default cashShopReducer;
