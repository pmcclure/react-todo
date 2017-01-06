import React from 'react';
var {connect} = require('react-redux');
import Todo from 'Todo';

//export just used for testing
export const TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do</p>
                )
            }
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} />
                );
            })
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

//export instead of modules.export used for testing
export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);