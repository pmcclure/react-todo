import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
//import $ from 'jQuery';
var {Provider} = require('react-redux');

var configureStore = require('configureStore');
import TodoList from 'TodoList';
import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should render TodoList', () => {
        var store = configureStore.configure();
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp />
            </Provider>
        );

        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, TodoList);

        expect(todoList.length).toEqual(1);

    });

});





