import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
})

store.dispatch(actions.addTodo('Clean the yard'));

store.dispatch(actions.setSearchText('yard'));

store.dispatch(actions.toggleShowCompleted());

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);
