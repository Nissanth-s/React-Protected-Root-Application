import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'reduxjs-toolkit-persist/es/constants';

import getgetUserListDataSlice from "./apis/getUserListReducer"
import userLoginDataSlice from "./apis/userLoginReducer"

const persistConfig = {
    key: process.env.REACT_APP_REDUX_PERSIST_KEY,
    storage,
    whitelist: [],
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        getgetUserListDataSlice,
        userLoginDataSlice
    })
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistedStore = persistStore(store);
export { persistedStore };
export default store;