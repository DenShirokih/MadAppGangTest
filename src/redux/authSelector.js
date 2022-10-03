const getId = state => state.auth.id;
const getloggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getFavorites = state => state.auth.favorites;
const getDragons = state => state.auth.dragons;

export const authSelectors = {
  getId,
  getloggedIn,
  getUserName,
  getFavorites,
  getDragons,
};
