import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { persistStore } from "redux-persist";
// import { persistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "materialize-css/dist/css/materialize.min.css";

// const persistor = persistStore(store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    {/* <persistGate persistor={persistor}> */}
      <StrictMode>
        <App />
      </StrictMode>
    {/* </persistGate> */}
  </Provider>,
  rootElement
);
