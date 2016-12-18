import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

const TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Clean kitchen',
                    completed: false
                },
                 {
                    id: uuid(),
                    text: 'Amazon shopping',
                    completed: true
                },
                 {
                    id: uuid(),
                    text: 'Water plants',
                    completed: true
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        })
    },
    handleSearch: function (showCompleted, searchText ) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id){
                //toggle to opposite true/false status
                todo.completed = !todo.completed;
            }
            return todo;
        })
        this.setState({todos:updatedTodos});
    },
    render: function (id) {
        var {todos} = this.state;
        return (
            <div> 
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;