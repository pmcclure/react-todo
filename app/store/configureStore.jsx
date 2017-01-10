import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers'

export var configure = (initialState = {}) => {

    //The root redux reducer that combines all reducers
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer,
        auth: authReducer
    });

    //This is the root component creating the redux store 
    //devtools used for the Chrome browser extension
    //Thunk is used for async middleware
    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;

};