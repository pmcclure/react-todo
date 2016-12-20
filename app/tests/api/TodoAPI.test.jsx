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

    describe('filterTodos', () => {
        var todos = [{
            id: 1,
            text: 'Text for first todo',
            completed: true
        }, {
            id: 2,
            text: 'Text for 2nd todo',
            completed: false
        }, {
            id: 3,
            text: 'Text for 3rd todo',
            completed: true
        }
        ]

        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should return only non completed items if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });

        it('should sort with the non-completed todos first', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'first');

            expect(filteredTodos.length).toBe(1);
        });

        it('should return all todos if searchText is empty', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

    });
})