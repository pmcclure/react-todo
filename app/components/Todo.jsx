import React from 'react';
import moment from 'moment';
var {connect} = require('react-redux');
var actions = require('actions');

//export is only used for the test file
export const Todo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';

        var renderDate = () => {
            var message = 'Created';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed';
                timestamp = completedAt;
            }
            return message + ' ' + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };

        return (      
            <div className={todoClassName} onClick={() => {
                dispatch(actions.toggleTodo(id));
            } }>
                <div>
                    <input type="checkbox" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
});

export default connect()(Todo);