import { EQUIPPED, PURCHASED, COINS } from "../actions/cashShop_actions";

const cashShopReducer = (state = { equipped: [], purchased: [], coins: 0 }, action) => {
  switch (action.type) {
    case EQUIPPED:
      if (action.equipped) {
        return { ...state, equipped: action.equipped};
      }
    case PURCHASED:
      if (action.purchased) {
        return {...state, purchased: action.purchased};
      }
    case COINS:
      if (action.coins) {
        return {...state, coins: action.coins};
      }
    default:
      return state;
  }
};

export default cashShopReducer;
