import React, { createContext, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [signedUser, setSignedUser] = useState(false);

//   useEffect(() => {
//     async function loadStorageData() {
//       const storageUser = await AsyncStorage.getItem("@Usuario:user");

//       if (storageUser) {
//         setUser(JSON.parse(storageUser));
//         setSignedUser(true);
//       }
//     }
//     loadStorageData();
//   }, []);

  async function signIn(usuario) {
    setUser(usuario);
    setSignedUser(true);
    // await AsyncStorage.setItem("@Usuario:user", JSON.stringify(usuario));
    return Promise.resolve();
  }

  //Mantém o usuário setado e encerra a sessão.
  function signOut() {
    setSignedUser(false);
  }


  return (
    <AuthContext.Provider
      value={{
        signedUser,
        user,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
