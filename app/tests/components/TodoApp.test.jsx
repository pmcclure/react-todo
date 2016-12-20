import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

     it('should add todo to the todo state on handleAddTodo', () => {
        var todoText = 'Something todo';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'todo stuff',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});

        //check that todos first item has completed equal false
        expect(todoApp.state.todos[0].completed).toBe(false);

        //toggle and check it's been changed to true
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);

        expect(todoApp.state.todos[0].completedAt).toBeA('number');

    });

     it('should toggle todo from completed to incomplete', () => {
        var todoData = {
            id: 11,
            text: 'todo stuff',
            completed: true,
            createdAt: undefined,
            completedAt: 0
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});

        //check that todos first item has completed equal true
        expect(todoApp.state.todos[0].completed).toBe(true);

        //toggle and check it's been changed to false
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(false);

        expect(todoApp.state.todos[0].completedAt).toNotExist();

    });
});





