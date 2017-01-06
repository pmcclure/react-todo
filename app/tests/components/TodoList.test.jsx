import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';
var {Provider} = require('react-redux');


import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'to do something',
            completed: false,
            completedAt: undefined,
            createdAt: 123
        },
        {
            id: 2,
            text: 'Something else',
            completed: false,
            completedAt: undefined,
            createdAt: 123
        }]

        var store = configure({
            todos
        })

        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList />
            </Provider> 
        )

        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0]
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);

    });

      it('should render empty message if theres no todos', () => {
        var todos = [];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var $el = $(ReactDOM.findDOMNode(todoList))
        expect($el.find('.container__message').length).toBe(1);

    });
});

