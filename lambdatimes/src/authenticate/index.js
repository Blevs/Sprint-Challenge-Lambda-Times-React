import React from 'react';

export const withAuthentication = ProtectedComponent => FallbackComponent => (props) => {
  const loggedIn = JSON.parse(window.localStorage.getItem("loggedIn")) || false;
  return (
    loggedIn ? <ProtectedComponent {...props}/> : <FallbackComponent {...props} />
  );
};
