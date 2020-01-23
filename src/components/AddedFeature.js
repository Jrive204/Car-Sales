import React from "react";
import { connect } from "react-redux";
import { addCarFeature } from "../actions/carActions";
import { featuresReducer } from "../reducers/featuresReducer";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className='button'>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state.carReducer.features, "test");
  return {
    additionalFeatures: state.featuresReducer.additionalFeatures,
    car: state.carReducer
  };
};

export default connect(mapStateToProps, { addCarFeature })(AddedFeature);
