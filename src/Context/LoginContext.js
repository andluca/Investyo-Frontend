import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { Cache } from "react-native-cache";
import { Alert, AsyncStorage } from "react-native";

const cache = new Cache({
  namespace: "InvestyoCache",
  policy: {
    maxEntries: 5000,
    stdTTL: 0,
  },
  backend: AsyncStorage,
});

cache.set("url", "https://d04b-201-182-107-196.sa.ngrok.io/");

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [acessToken, setAcessToken] = useState("");

  const addToCache = async (key, value) => {
    try {
      await cache.remove(key)
      await cache.set(key, value);
    } catch (error) {
      Alert.alert(error + " Cache Failure");
    }
  };

  const connectToBackend = async (url) => {
    try {
      const connection = await axios.get(url);
      Alert.alert(connection.data);
      addToCache("url", url);
    } catch (error) {
      Alert.alert(error + " Connection Failure");
    }
  };

  const getUrl = async () => {
    try {
      return await cache.get("url");
    } catch (error) {
      Alert.alert(error + " GetCache Failure");
    }
  };

  
  const doLogin = async (username, password) => {
    try {
      const url = await getUrl();
      const result = await axios.post(url + "login", {
        username,
        password,
      });
      const refreshToken = result.data.refreshToken;

      const AcessToken = result.headers.authorization;

      await addToCache("refreshToken", refreshToken);
      await setAcessToken(AcessToken);
      return true
    } catch (error) {
      return false
    }
  };

  const getRefreshToken = async () => {
    try {
      return await cache.get("refreshToken");
    } catch (error) {
      Alert.alert(error + " GetRefreshToken Failure");
    }
  };

  const doRefreshToken = async () => {
    try {
      const url = await getUrl();
      const refreshToken = await getRefreshToken()
      
      const result = await axios.post(url + "refresh", {
        refreshToken
      });
      const newRefreshToken = result.data.refreshToken;

      const AcessToken = result.headers.authorization;


      await addToCache("refreshToken", newRefreshToken);
      await setAcessToken(AcessToken);
    } catch (error) {
      Alert.alert(error + " Refresh Failure");
    }
  };

  const doRegister = async(username, password) =>{
    try {
      const url = await getUrl();
      const register = await axios.post(url+'register', {
        username, 
        password
      })

      Alert.alert('Usuário '+register.data.user.username+' cadastrado')
      return true
    } catch (error) {
      Alert.alert(error + " Register Failure");
      return false
    }
  }

  return (
    <LoginContext.Provider
      value={{
        acessToken,
        connectToBackend,
        getUrl,
        doLogin,
        doRegister
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContextProvider };
