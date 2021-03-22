// import { combineReducers } from 'redux';
// import { counterReducer, loggedReducer } from './reducers'
import shopItems from "../JSON/items.json";
import achivmts from "../JSON/achievements.json";
import { treeIcons, extraTreeIcons } from "../JSON/tree-icons";

const INITIAL_STATE = {
  count: 0,
  lvl: 1,
  mulitplier: 1,
  gold: 0,
  planters: 0,
  clicks: 0,
  goldTotal: 0,
  achieveCount: 0,
  treesPerSec: 0,
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
        count: state.count + 1
      };
    case "LVL_UP":
      console.log("lvl upppp!");
      return {
        ...state,
        lvl: state.lvl + 1
      };
    case "ADD_GOLD":
      return {
        ...state,
        gold: state.gold + 1
      };
    case "SPEND_GOLD":
      return {
        ...state,
        gold: state.gold - 1
      };
    case "INCREMENT_MULTI":
      return {
        ...state,
        mulitplier: state.mulitplier + 1
      };
    case "ADD_PLANTER":
      return {
        ...state,
        planters: state.planters + 1
      };
    case "ADD_ACHIEVEMENT":
      return {
        ...state,
        achieveCount: state.achieveCount + 1
      };
    case "CLEAR_PROGRESS":
      return {
        state: INITIAL_STATE
      };
    default:
      return state;
  }
};

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	isLogged: loggedReducer
// });

export default rootReducer;
