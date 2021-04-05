// NOT USED - saved in case of future upgrades

import {
  INCREMENT_COUNT,
  LVL_UP,
  INCREMENT_FACTOR,
  ADD_GOLD,
  SPEND_GOLD,
  CLEAR_PROGRESS
} from "./actions";

import shopItems from "../utils/json/items.json";
import achivmts from "../utils/json/achievements.json";


const preloadedState = {
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
  achievements: [...achivmts]
};

export const countReducer = (state = preloadedState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_COUNT: {
      const { amount } = payload;
      return {
        ...state,
        count: state.count + amount,
        clicks: state.clicks++
      };
    }
    default:
      return state;
  }
};

export const lvlReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case LVL_UP:
      return {
        ...state,
        lvl: state.lvl++
      };
    default:
      return state;
  }
};

export const goldReducer = (state = preloadedState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_GOLD: {
      const { amount } = payload;
      return {
        ...state,
        gold: state.gold + amount
      };
    }
    case SPEND_GOLD: {
      const { amount } = payload;
      return {
        ...state,
        gold: state.gold - amount
      };
    }
    default:
      return state;
  }
};

export const factorReducer = (state = preloadedState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_FACTOR: {
      const { amount } = payload;
      return {
        ...state,
        mulitplier: state.mulitplier + amount
      };
    }
    default:
      return state;
  }
};

// export const plantersReducer = (state = INITIAL_STATE, action, amount) => {
//   switch (action.type) {
//     case ADD_PLANTER:
//       return {
//         ...state,
//         planters: state.planters + amount
//       };
//     default:
//       return state;
//   }
// };

// export const achieveReducer = (state = preloadedState, action) => {
//   switch (action.type) {
//     case ADD_ACHIEVEMENT:
//       return {
//         ...state,
//         achieveCount: state.achieveCount + 1
//       };
//     default:
//       return state;
//   }
// };

export const progressReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case CLEAR_PROGRESS:
      return {
        state: preloadedState
      };
    default:
      return state;
  }
};
