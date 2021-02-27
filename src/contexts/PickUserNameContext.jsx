import React, { createContext, useState } from 'react';

const Context = createContext();

// eslint-disable-next-line react/prop-types
function UserNameProvider({ children }) {
  const [repoInfo, setRepoInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const [fetched, setFetched] = useState(false);

  return (
    <Context.Provider
      value={{
        repoInfo,
        setRepoInfo,
        fetched,
        userInfo,
        setUserInfo,
        setFetched,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { UserNameProvider, Context };
