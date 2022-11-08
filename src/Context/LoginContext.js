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

cache.set("url", "https://d4f9-2804-389-2021-6c59-d148-390b-48a3-6e53.sa.ngrok.io/");

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [acessToken, setAcessToken] = useState("");
  const getAcessAxios = async (acessToken) => {
    const url = await getUrl();

    const baseURL = `${url}user`;

    const acessAxiosInstance = axios.create({
      baseURL,
      headers: {
        authorization: acessToken,
      },
    });

    return acessAxiosInstance;
  };

  const addToCache = async (key, value) => {
    try {
      await cache.remove(key);
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

  const doLogout = async () => {
    try {
      const refreshToken = await getRefreshToken();
      const acessAxios = await getAcessAxios(acessToken);
      acessAxios.post("/logout", {
        refreshToken,
      });

    } catch (error) {
      Alert.alert(error);
      
    }
  };

  const performOperationBuy = async (symbol, quantity) => {
    try {
      console.log('Certo')
      const acessAxios = await getAcessAxios(acessToken);
      return await acessAxios.post("/perform_operation", {
        operationType: "buyAsset",
        symbol,
        quantity
      });
    } catch (error) {
      Alert.alert(error);
    }
  };

  const performOperationSell = async (symbol, quantity) => {
    try {
      const acessAxios = await getAcessAxios(acessToken);
      acessAxios.post("/perform_operation", {
        operationType: "sellAsset",
        symbol,
        quantity
      });
    } catch (error) {
      Alert.alert(error);
    }
  };

  const addBalance = async (value) => {
    try {
      const acessAxios = await getAcessAxios(acessToken);
      acessAxios.post("/change_balance", {
        operationType: "addFunds",
        value
      });
    } catch (error) {
      Alert.alert(error);
    }
  };

  const withdrawBalance = async (value) => {
    try {
      const acessAxios = await getAcessAxios(acessToken);
      acessAxios.post("/change_balance", {
        operationType: "withdrawFunds",
        value
      });
    } catch (error) {
      Alert.alert(error);
    }
  };

  const searchByName = async (name) => {
    try {
      const acessAxios = await getAcessAxios(acessToken);
      const response = await acessAxios.get(`/api/search_name?name=${name}`);
      return await response.data
    } catch (error) {
      Alert.alert(error + "Search failure");
    }
  };

  const getHistoricalValues = async (symbol, days) => {
    try {
      const acessAxios = await getAcessAxios(acessToken);
      return await acessAxios.get(`/api/historical_values?days=${days}&symbol=${symbol}`);
    } catch (error) {
      Alert.alert(error);
    }
  };

  const getProfile = async () => {
    try {
      const acessAxios = await getAcessAxios(acessToken);
      return await (await acessAxios.get("/profile")).data;
    } catch (error) {
      Alert.alert(error);
    }
  }

  const getProfileWallet = async () => {
    try {
      const acessAxios = await getAcessAxios(acessToken);
      return await (await acessAxios.get("/profile/wallet")).data;
    } catch (error) {
      Alert.alert(error);
      
    }
  };

  const getProfileExtracts = async () => {
    try {
      const acessAxios = await getAcessAxios(acessToken);
      return await acessAxios.get("/profile/extract");
    } catch (error) {
      Alert.alert(error);
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


      return true;
    } catch (error) {
      return false;
      Alert.alert("Usuário não encontrado")
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
      const refreshToken = await getRefreshToken();

      const result = await axios.post(url + "refresh", {
        refreshToken,
      });
      const newRefreshToken = result.data.refreshToken;

      const AcessToken = result.headers.authorization;

      await addToCache("refreshToken", newRefreshToken);

      await setAcessToken(AcessToken);
    } catch (error) {
      Alert.alert(error + " Refresh Failure");
    }
  };

  const doRegister = async (username, password) => {
    try {
      const url = await getUrl();
      Alert.alert(url);
      const register = await axios.post(url + "register", {
        username,
        password,
      });

      Alert.alert("Usuário " + register.data.user.username + " cadastrado");
      return true;
    } catch (error) {
      console.log(error);
      Alert.alert(error + " Register Failure");
      return false;
    }
  };

  return (
    <LoginContext.Provider
      value={{
        connectToBackend,
        getUrl,
        doLogin,
        doRegister,
        doLogout,
        getProfileExtracts,
        getProfileWallet,
        getHistoricalValues,
        searchByName,
        withdrawBalance,
        addBalance,
        performOperationBuy,
        performOperationSell,
        getProfile
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContextProvider };
