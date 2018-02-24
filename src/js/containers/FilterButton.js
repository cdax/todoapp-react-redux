
import { connect } from 'react-redux';

import FilterButtonComponent from '../components/FilterButton';

import setVisibilityFilter from '../actions/visibilityFilter';


const mapStateToProps = (state, props) => ({
  disabled: props.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(props.filter));
  },
});


const FilterButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButtonComponent);


export default FilterButton;
