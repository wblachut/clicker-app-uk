import shopItems from "../JSON/items.json";
import achivmts from "../JSON/achievements.json";
import { treeIcons, extraTreeIcons } from "../JSON/tree-icons";

const INITIAL_STATE = {
  count: 0,
  lvl: 1,
  factor: 1,
  gold: 0,
  planters: 0,
  clicks: 0,
  goldTotal: 0,
  achieveCount: 0,
  treesPerSec: 0,
  itemsCount: 0,
  items: [...shopItems],
  achievements: [...achivmts],
  treeIcons: [...treeIcons],
  extraIcons: [...extraTreeIcons],
  myExtraIcons: []
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + action.payload.factor,
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
        gold: state.gold + 1,
        goldTotal: state.goldTotal + 1
      };
    case "SPEND_GOLD":
      return {
        ...state,
        gold: state.gold - action.payload.ammount
      };
    case "INCREMENT_FACTOR":
      return {
        ...state,
        factor: state.factor + action.payload.ammount
      };
    case "INCREMENT_TPS":
      return {
        ...state,
        treesPerSec: state.treesPerSec + action.payload.ammount
      };
    case "ADD_PLANTER":
      return {
        ...state,
        planters: state.planters + action.payload.ammount
      };
    case "ADD_ACHIEVEMENT":
      return {
        ...state,
        achieveCount: state.achieveCount + 1
      };
    case "ADD_ITEM":
      return {
        ...state,
        itemsCount: state.itemsCount + 1
      };
    case "CLEAR_PROGRESS":
      return {
        state: INITIAL_STATE
      };
    default:
      return state;
  }
};

export default rootReducer;
