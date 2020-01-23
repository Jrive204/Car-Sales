import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const car = useSelector(state => state.carReducer.car);
  return (
    <>
      <figure className='image'>
        <img style={{ width: "380px" }} src={car.image} alt={car.name} />
      </figure>
      <h2
        style={{
          color: "red",
          fontFamily: "cursive",
          fontWeight: "900",
          textAlign: "center"
        }}>
        {car.name}
      </h2>
      <p style={{ textAlign: "center" }}>Amount: ${car.price}</p>
    </>
  );
};

export default Header;
