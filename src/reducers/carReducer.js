const initialstate = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  }
};

export const carReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_FEATURE_CAR": {
      return {
        ...state,

        additionalPrice: (state.additionalPrice += action.payload.price),
        car: { ...state.car, features: [...state.car.features, action.payload] }
      };
    }
    case "REMOVE_FEATURE": {
      return {
        ...state,
        additionalPrice: (state.additionalPrice -= action.payload.price),
        car: {
          ...state.car,
          features: state.car.features.filter(
            feature => feature.id !== action.payload.id
          )
        }
      };
    }

    default:
      return state;
  }
};
