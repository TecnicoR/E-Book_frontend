import appConstants from "../constants/app.constants";

function updateUserData(userData) {
  function setData(data) {
    return { type: appConstants.USER_DATA, data };
  }
  return (dispatch) => {
    dispatch(setData(userData));
  };
}

export const userActions={
    updateUserData
}