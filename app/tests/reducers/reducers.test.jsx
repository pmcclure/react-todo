var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            }

            //pass in empty string (current state) and action above
            //df deep freeze is used to make sure that nothing is altered. If the empty string and action are updated at all the test will fail
            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        })
    });

    describe('showCompletedReducer', () => {
        it('should toggle show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED',
            }

            //pass in empty string (current state) and action above
            var res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        })
    });

    describe('todosReducer', () => {
        it('should add a todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'walk the dog'
            }

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        })

        it('should toggle todo', () => {
            var todos = [{
                id: 123,
                text: 'Something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];

            var action = {
                type: 'TOGGLE_TODO',
                id: 123
            }
            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        })

        it('should add existing todos', () => {
            var todos = [{
                id: 1,
                text: 'Stuff',
                completed: false,
                completedAt: undefined,
                createdAt: 123
            }];
            var action = {
                type: 'ADD_TODOS',
                todos
            };

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        })
    });
});