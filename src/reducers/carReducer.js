const initialstate = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  features: []
};

export const carReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_FEATURE_CAR": {
      return {
        ...state,

        features: [...state.features, action.payload]
      };
    }

    default:
      return state;
  }
};
