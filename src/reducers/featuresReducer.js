const initialState = {
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const featuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_FEATURE":
      return {
        additionalFeatures: state.additionalFeatures.filter(
          feature => feature.id !== action.payload
        )
      };

    default:
      return state;
  }
};
