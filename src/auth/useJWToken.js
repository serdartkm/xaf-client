import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import decode from 'jwt-decode';

export default function useJWToken() {
  const state = useSelector(state => state);

  useEffect(() => {
    if (state.auth.token) {
      saveToken({ key: 'username', value: state.auth.token });
    }
  }, [state.auth.token]);

  function saveToken(key, value) {
    localStorage.setItem(key, value);
  }

  function removeToken(key) {
    localStorage.removeItem(key);
  }

  function isTokenExpired() {
    if (window.Cypress) {
      return true;
    }
    const decoded = decode(state.auth.token);
    if (decoded.exp < Date.now() / 1000) {
      // Checking if token is expired.
      return true;
    }
    return false;
  }

  function isLoggedIn() {
    // Checks if there is a saved token and it's still valid

    return !!state.auth.token && !isTokenExpired(state.auth.token); // handwaiving here
  }

  return { isLoggedIn, removeToken };
}
