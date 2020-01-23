import React from "react";
import { useDispatch } from "react-redux";
import { addCarFeature } from "../actions/carActions";

const AdditionalFeature = props => {
  const dispatch = useDispatch();

  const buyItem = item => {
    let newitem = {
      id: Math.floor(Math.random() * Date.now()),
      name: props.feature.name,
      price: props.feature.price
    };
    dispatch({ type: "ADD_FEATURE_CAR", payload: newitem });
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

export default AdditionalFeature;
