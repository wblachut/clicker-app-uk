import shopItems from "../../utils/json/items.json";
import achivmts from "../../utils/json/achievements.json";
import { treeIcons } from "../../utils/treeIcons";

const INITIAL_STATE = {
  count: 0,
  lvl: 1,
  factor: 1,
  gold: 0,
  clicks: 0,
  goldTotal: 0,
  achieveCount: 0,
  treesPerSec: 0,
  itemsCount: 0,
  items: [...shopItems],
  achievements: [...achivmts],
  treeIcons:  [...treeIcons],
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + action.payload.factor,
      };
    case "INCREMENT_CLICKS":
      return {
        ...state,
        clicks: state.clicks + 1
      };
    case "LVL_UP":
      return {
        ...state,
        lvl: state.lvl + 1
      };
    case "ADD_GOLD":
      return {
        ...state,
        gold: state.gold + action.payload.amount,
        goldTotal: state.goldTotal + action.payload.amount,
      };
    case "SPEND_GOLD":
      return {
        ...state,
        gold: state.gold - action.payload.amount,
      };
    case "INCREMENT_FACTOR":
      return {
        ...state,
        factor: state.factor + action.payload.amount,
      };
    case "INCREMENT_TPS":
      return {
        ...state,
        treesPerSec: state.treesPerSec + action.payload.amount,
      };
    case "ADD_ACHIEVEMENT":
      return {
        ...state,
        achieveCount: state.achieveCount + 1,
        achievements: action.payload.achievements,
      };
    case "ADD_ITEM":
      return {
        ...state,
        itemsCount: state.itemsCount + 1,
        items: action.payload.items,
      };
    case "CHANGE_TREE_ICONS":
      return {
        ...state,
        treeIcons: action.payload.treeIcons
      };
    case "CLEAR_PROGRESS":
      return INITIAL_STATE
    default:
      return state;
  }
};

export default rootReducer;
