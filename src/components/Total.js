import React from "react";
import { connect } from "react-redux";
import { addCarFeature } from "../actions/carActions";

import { useSelector, useAction } from "react-redux";

const Total = () => {
  const car = useSelector(state => state.carReducer.car);
  const additionalPrice = useSelector(
    state => state.carReducer.additionalPrice
  );

  return (
    <div className='content'>
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
