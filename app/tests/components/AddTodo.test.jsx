import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

var {AddTodo} = require ('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid text is entered', () => {
        var todoText = 'Check stuff';
        var action = {
            type: 'ADD_TODO',
            text: 'Check stuff'
        }
        const spy = expect.createSpy();
        const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    })

    it('should not dispatch ADD_TODO when invalid text entered', () => {
        var todoText = '';
        const spy = expect.createSpy();
        const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toNotHaveBeenCalled(todoText);
    })
});