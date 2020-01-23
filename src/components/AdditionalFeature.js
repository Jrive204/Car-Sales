import React from "react";
import { connect } from "react-redux";
import { addCarFeature } from "../actions/carActions";

const AdditionalFeature = props => {
  const buyItem = item => {
    let newitem = {
      id: Math.floor(Math.random() * Date.now()),
      name: props.feature.name,
      price: props.feature.price
    };

    props.addCarFeature(newitem);
  };
  console.log(props.feature.name, "props.feature");
  return (
    <li>
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
    car: state.carReducer.car
  };
};

export default connect(mapStateToProps, { addCarFeature })(AdditionalFeature);
