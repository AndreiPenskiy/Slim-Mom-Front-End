const getLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUser = state => state.auth.user;

const getCurrentRefresh = state => state.auth.isRefresh;

const getTempParameters = state => state.auth.tempParameters;

export {
  getLoggedIn,
  getUserName,
  getCurrentRefresh,
  getTempParameters,
  getUser,
};
