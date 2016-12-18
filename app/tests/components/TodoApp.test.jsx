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
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'todo stuff',
            completed: false
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});

        //check that todos first item has completed equal false
        expect(todoApp.state.todos[0].completed).toBe(false);

        //toggle and check it's been changed to true
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);

    });
});





