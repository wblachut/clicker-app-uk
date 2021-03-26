import { createStore } from 'redux';
import rootReducer from './rootReducer.js';
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage,
  stateReconcler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export default store;


// const rootReducer = combineReducers(reducers);

// const preloadedState = {
//   count: 0,
//   lvl: 1,
//   mulitplier: 1,
// };

// export const configureStore = () => createStore(rootReducer, preloadedState);
