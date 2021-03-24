import { createStore } from 'redux';
import rootReducer from './rootReducer.js';
const store = createStore(rootReducer);
export default store;


// const rootReducer = combineReducers(reducers);

// const preloadedState = {
//   count: 0,
//   lvl: 1,
//   mulitplier: 1,
// };

// export const configureStore = () => createStore(rootReducer, preloadedState);
