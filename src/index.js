import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "materialize-css/dist/css/materialize.min.css";

const persitedStore = persistStore(store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persitedStore}>
      <StrictMode>
        <App />
      </StrictMode>
    </PersistGate>
  </Provider>,
  rootElement
);
