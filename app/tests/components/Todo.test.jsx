import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import * as actions from 'actions';
//grab the raw react component
import {Todo} from 'Todo';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should dispactch toggleTodo action on click', () => {
        var todoData = {
            id:199,
            text: 'Test',
            completed:true
        };
        var action = actions.startToggleTodo(todoData.id, !todoData.completed);
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />)
        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);
        
        expect(spy).toHaveBeenCalledWith(action);
    });
});