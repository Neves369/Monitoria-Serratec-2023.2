import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [signedUser, setSignedUser] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@Usuario:user");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setSignedUser(true);
      }
    }
    loadStorageData();
  }, []);

  async function signIn(usuario) {
    setUser(usuario);
    setSignedUser(true);
    await AsyncStorage.setItem("@Usuario:user", JSON.stringify(usuario));
    return Promise.resolve();
  }

  //Mantém o usuário setado e encerra a sessão.
  async function signOut() {
    setSignedUser(false);
    setUser(undefined);
    await AsyncStorage.removeItem("@Usuario:user")
  }


  return (
    <AuthContext.Provider
      value={{
        signedUser,
        user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
