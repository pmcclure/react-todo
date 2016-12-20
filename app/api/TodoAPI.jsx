import $ from 'jQuery';

module.exports = {
    setTodos: function (todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos))
            return todos;    
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } 
        catch (e) {

        }

        //if todos is an array then return it. otherwise return an empty array
        return $.isArray(todos) ? todos : [];       
    },
    //Filter todos using the Search filter and checkbox
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        //Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        })

        //Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();

            return searchText.length === 0 || text.indexOf(searchText) > -1;
        })

        //Sort todos with non-completed first
        filteredTodos.sort((a,b) => {
            if (!a.completed && b.completed) {
                return -1;
            }
            else if(a.completed && !b.completed) {
                return 1;
            }
            else {
                return 0;
            }
        })

        return filteredTodos;
    }
}