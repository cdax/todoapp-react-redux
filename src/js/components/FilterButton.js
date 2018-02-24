
import React from 'react';
import PropTypes from 'prop-types';


const FilterButton = ({
  onClick,
  disabled,
  children,
}) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    disabled={disabled}
  >
    {children}
  </button>
);


FilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};


export default FilterButton;
