import React from "react";
import { connect } from "react-redux";
import { addCarFeature, removeCarFeature } from "../actions/carActions";
import { featuresReducer } from "../reducers/featuresReducer";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className='button'
        onClick={() => props.removeCarFeature(props.feature)}>
        X
      </button>
      {props.feature.name} - &nbsp;
      {`$${props.feature.price}`}
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state.carReducer.features, "test");
  return {
    additionalFeatures: state.featuresReducer.additionalFeatures,
    car: state.carReducer.car
  };
};

export default connect(mapStateToProps, { addCarFeature, removeCarFeature })(
  AddedFeature
);
