import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../lib/firebase/firebase.utils";

// export const UsersContext = createContext();
export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = {
    user,
    setUser,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
