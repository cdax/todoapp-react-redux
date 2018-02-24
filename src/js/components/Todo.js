
import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({
  text,
  completed,
  onClick,
}) => (
  <div>
    <input
      type="checkbox"
      checked={completed}
      onChange={onClick}
    />
    <span
      style={{
        textDecoration:
          completed ?
            'line-through' :
            'none',
      }}
    >
      {text}
    </span>
  </div>
);


Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Todo;
