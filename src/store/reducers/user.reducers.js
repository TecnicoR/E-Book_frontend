import appConstants from "../constants/app.constants";

export default (store = { userData: null }, action) => {
  switch (action.type) {
    case appConstants.USER_DATA:
      return { ...store, userData: action.data };
    default:
      return { ...store };
  }
};
