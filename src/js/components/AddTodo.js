
import React from 'react';
import PropTypes from 'prop-types';

import { addTodo } from '../actions/todos';


const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input
        ref={(node) => {
          input = node;
        }}
      />
      {' '}
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
          input.focus();
        }}
      >
        Add todo
      </button>
    </div>
  );
};


AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default AddTodo;
