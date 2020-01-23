import React from "react";
import { connect } from "react-redux";
import { addCarFeature } from "../actions/carActions";

const AdditionalFeature = props => {
  const buyItem = item => {
    props.addCarFeature(props.feature);
  };
  console.log(props.feature, "props.feature");
  return (
    <li>
      {console.log(props.feature.name, "what is this")}
      {/* Add an onClick that will let you add a feature to your car */}
      <button className='button' onClick={() => buyItem()}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.featuresReducer.additionalFeatures,
    car: state.carReducer
  };
};

export default connect(mapStateToProps, { addCarFeature })(AdditionalFeature);
