import { legacy_createStore as createReduxStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export const configureStore = () => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createReduxStore(persistedReducer, composeWithDevTools());

  let persistor = persistStore(store);
  return { store, persistor };
};
