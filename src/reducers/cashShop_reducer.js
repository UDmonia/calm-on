import { EQUIP } from "../actions/cashShop_actions";

const cashShopReducer = (state = { equipped: [] }, action) => {
  switch (action.type) {
    case EQUIP:
      return { equipped: action.outfitList };
    default:
      return state;
  }
};

export default cashShopReducer;
