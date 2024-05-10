import statsReducer from '@features/stats/statsSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  stats: statsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// middleware

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
