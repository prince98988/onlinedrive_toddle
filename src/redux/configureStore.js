import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Folders } from './Folders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            folders:Folders
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}