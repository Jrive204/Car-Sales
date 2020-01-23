import React from "react";
import { connect } from "react-redux";
import { addCarFeature } from "../actions/carActions";

const Total = props => {
  return (
    <div className='content'>
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.featuresReducer.additionalFeatures,
    car: state.carReducer
  };
};
export default connect(mapStateToProps, { addCarFeature })(Total);
