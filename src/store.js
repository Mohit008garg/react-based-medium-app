
import { applyMiddleware, createStore, compose } from 'redux';
import IndexReducer from './shared/index-reducer';

let store = null;

export const getStore = (sagaMiddleware) =>{
    const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
    if(store === null){
        store = createStore(
            IndexReducer,
            composeSetup(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
        )
    }
    return store;
}