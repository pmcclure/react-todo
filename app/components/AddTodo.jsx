import React from 'react';
var {connect} = require('react-redux');
var actions = require('actions');

//export just used for testing
export const AddTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
        }
        else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>

            </div>
        )
    }
});

//two exports. The connected component (connected to redux) for the app and the unconnected component for testing
export default connect()(AddTodo);