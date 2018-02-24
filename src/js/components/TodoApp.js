
import React from 'react';

import AddTodo from '../containers/AddTodo';
import Footer from '../components/Footer';
import VisibleTodoList from '../containers/VisibleTodoList';


const TodoApp = () => (
  <div>
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </div>
);


export default TodoApp;
