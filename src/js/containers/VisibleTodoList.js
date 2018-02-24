
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';

import { toggleTodo } from '../actions/todos';


const getVisibleTodos = (
  ts,
  filter,
) => {
  let filteredTodos = ts;
  switch (filter) {
    case 'SHOW_ALL':
      break;
    case 'SHOW_COMPLETED':
      filteredTodos = ts.filter(t => t.completed);
      break;
    case 'SHOW_ACTIVE':
      filteredTodos = ts.filter(t => !t.completed);
      break;
    default:
      break;
  }
  return filteredTodos;
};


const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});


const mapDispatchToProps = dispatch => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);


export default VisibleTodoList;
