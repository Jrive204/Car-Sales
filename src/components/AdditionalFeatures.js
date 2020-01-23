import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
import { deleteAdditionalFeatures } from "../actions/additionalfeaturesActions";
import { addCarFeature } from "../actions/carActions";

const AdditionalFeatures = props => {
  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type='1'>
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    additionalFeatures: state.featuresReducer.additionalFeatures,
    car: state.carReducer.car
  };
};

export default connect(mapStateToProps, {
  addCarFeature,
  deleteAdditionalFeatures
})(AdditionalFeatures);
