import React from "react";
import { connect } from "react-redux";
import { addCarFeature } from "../actions/carActions";

const Header = props => {
  return (
    <>
      <figure className='image'>
        <img
          style={{ width: "380px" }}
          src={props.car.image}
          alt={props.car.name}
        />
      </figure>
      <h2
        style={{
          color: "red",
          fontFamily: "cursive",
          fontWeight: "900",
          textAlign: "center"
        }}>
        {props.car.name}
      </h2>
      <p style={{ textAlign: "center" }}>Amount: ${props.car.price}</p>
    </>
  );
};
const mapStateToProps = state => {
  return {
    additionalFeatures: state.featuresReducer.additionalFeatures,
    car: state.carReducer.car
  };
};
export default connect(mapStateToProps, { addCarFeature })(Header);
