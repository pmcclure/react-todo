import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'to do something'
        },
        {
            id: 2,
            text: 'Something else'
        }]

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);

    });
});





