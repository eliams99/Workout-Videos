const KEY = "User";

export function login(username, password) {
  // Call to login service
  // const { data: jwt } = await http.post(apiEndpoint, { username, password });
  // sessionStorage.setItem(tokenKey, jwt);
  sessionStorage.setItem(KEY, username);
}

export function logout() {
  sessionStorage.removeItem(KEY);
}

export function getCurrentUser() {
  try {
    const currentUser = sessionStorage.getItem(KEY);
    return currentUser;
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
};
