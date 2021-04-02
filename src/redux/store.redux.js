import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import usersReducer from './reducers/users.reducer';

const initialState = {}

const middleware = [thunk]

const reducers = combineReducers({
    users: usersReducer
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['users']
}

const pReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    pReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

const persistor = persistStore(store)

export { store, persistor }
// export default store;