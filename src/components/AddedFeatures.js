import React from "react";

import AddedFeature from "./AddedFeature";
import { connect } from "react-redux";
import { addCarFeature } from "../actions/carActions";

const AddedFeatures = props => {
  return (
    <div className='content'>
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type='1'>
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.featuresReducer.additionalFeatures,
    car: state.carReducer
  };
};
export default connect(mapStateToProps, { addCarFeature })(AddedFeatures);
