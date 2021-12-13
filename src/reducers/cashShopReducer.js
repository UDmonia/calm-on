import { EQUIPPED, COINS } from "../actions/cashShop_actions";

const cashShopReducer = (state = { equipped: [], coins: 0 }, action) => {
  switch (action.type) {
    case EQUIPPED:
      return { ...state, equipped: action.outfitList };
    case COINS:
      return {...state, coins: action.coins};
    default:
      return state;
  }
};

export default cashShopReducer;
