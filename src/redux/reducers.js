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

export const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + state.mulitplier,
        clicks: state.clicks ++
      };
    default:
      return state;
  }
};

export const lvlReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LVL_UP":
      return {
        ...state,
        lvl: state.lvl ++
      };
    default:
      return state;
  }
};

export const goldReducer = (state = INITIAL_STATE, action, ammount) => {
  switch (action.type) {
    case "ADD_GOLD":
      return {
        ...state,
        gold: state.gold + 1
      };
    case "SPEND_GOLD":
      return {
        ...state,
        gold: state.gold - ammount
      };
    default:
      return state;
  }
};

export const multiplierReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_MULTI":
      return {
        ...state,
        mulitplier: state.mulitplier + 1
      };
    // case "DOUBLE_MULTI":
    //   return {
    //     ...state,
    //     mulitplier: state.mulitplier * 2
    //   };
    default:
      return state;
  }
};

export const plantersReducer = (state = INITIAL_STATE, action, ammount) => {
  switch (action.type) {
    case "ADD_PLANTER":
      return {
        ...state,
        planters: state.planters + ammount
      };
    default:
      return state;
  }
};

export const achieveReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ACHIEVEMENT":
      return {
        ...state,
        achieveCount: state.achieveCount + 1
      };
    default:
      return state;
  }
};

export const progressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CLEAR_PROGRESS":
      return {
        state: INITIAL_STATE
      };
    default:
      return state;
  }
};

// export { counterReducer, loggedReducer }
