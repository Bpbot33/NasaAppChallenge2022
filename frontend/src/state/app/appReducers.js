const initialState = {
  menuOpenFilters: false,
  resultsData: [],
  resultsDataForCharts: [],
  filters: "",
};

export const AppReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ON_OPEN_FILTERS":
      return {
        ...state,
        menuOpenFilters: action.payload,
      };

    case "ON_SET_RESULTS_DATA":
      return {
        ...state,
        resultsData: action.payload,
      };

    case "ON_SET_RESULTS_DATA_FOR_CHARTS":
      return {
        ...state,
        resultsDataForCharts: action.payload,
      };

    case "ON_SET_FILTERS":
      return {
        ...state,
        filters: action.payload,
      };

    default:
      return state;
  }
};
