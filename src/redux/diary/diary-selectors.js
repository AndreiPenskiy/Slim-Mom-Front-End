const getIsLoggedIn = state => state.authUser.isLoggedIn;

const getDate = state => state.dairy.date;

const getUserEmail = state => state.authUser.user.email;

const getFetchCurrentUser = state => state.authUser.isFetchCurrentUser;

const dateSelectors = {
  getIsLoggedIn,
  getDate,
  getUserEmail,
  getFetchCurrentUser,
};
export default dateSelectors;
