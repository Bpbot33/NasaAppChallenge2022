const initialState = {
  menuOpenFilters: false,
};

export const AppReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ON_OPEN_FILTERS":
      return {
        ...state,
        menuOpenFilters: action.payload,
      };

    default:
      return state;
  }
};
