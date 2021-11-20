import { EQUIPPED, COINS } from "../actions/cashShop_actions";

const cashShopReducer = (state = { equipped: [] }, action) => {
  switch (action.type) {
    case EQUIPPED:
      return { equipped: action.outfitList };
    case COINS:
      return {coins: action.coins};
    default:
      return state;
  }
};

export default cashShopReducer;
