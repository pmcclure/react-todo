import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    })

    it('should exist', () => {
        expect(TodoAPI).toExist();
    })

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 1,
                text: 'Test title',
                completed: false
            }]
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'))
            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badTodos = { a: 'thing' };
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        })

    });

    describe('getTodos', () => {
        it('should return an empty array for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todo if theres a valid array in local storage', () => {
            var todos = [{
                id: 1,
                text: 'Test title',
                completed: false
            }]

            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });


})