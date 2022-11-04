import React, { useContext, useState, createContext } from "react";
import { Children } from "react";
import { Cache } from "react-native-cache";
import axios from "axios";

const LoginContext = createContext();

const cache = new Cache({
    namespace: "LoginCache",
    policy: {
        maxEntries: 50000, 
        stdTTL: 0 
    },
    backend: AsyncStorage
});

await cache.set('acessToken', acessToken);
await cache.set('refreshToken', refreshToken);

const login = (username, senha)=>{
    try {
        axios
    } catch (error) {
        
    }
}

const LoginSystemProvider = ({ children, ...rest }) => {
    const [acessToken, setToken] = useState("");

  return (
    <LoginContext.Provider
      value={{
        token,
        getToken,
      }}
    />
  );
};

export default LoginSystemProvider;
