import React, { useContext } from "react";
import { View } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView, Dimensions, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import HeaderBar from "../../components/HeaderBar";
import { PieChart } from "react-native-svg-charts";
import { FlatList } from "react-native-gesture-handler";
import { LoginContext } from "../../Context/LoginContext";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

const data = [
  {
    asset: "AAPL",
    quantity: 12,
    totalValue: 1399.9,
  },
  {
    asset: "MSFT",
    quantity: 8,
    totalValue: 876.8,
  },
  {
    asset: "SNEC34",
    quantity: 3,
    totalValue: 1178.76,
  },
  {
    asset: "NFLX",
    quantity: 10,
    totalValue: 1268.98,
  },
  {
    asset: "DISB",
    quantity: 15,
    totalValue: 1867,
  },
];

export default function AssetsScreen({ headerbar }) {
  const {getProfileWallet} = useContext(LoginContext);
  const [assets, setAssets] = useState([])

  useEffect(() => {
    const makeAssets = async () => {
      try {
        const initialExtract = await getProfileWallet();
        setAssets(await initialExtract.data.assets);
      } catch (error) {
        Alert.alert("Não foi possível checar os ativos");
      }
    };
    makeAssets();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          {
            width: 340 * w,
            height: 100 * h,
            backgroundColor: "#fff",
            marginVertical: 10 * h,
            marginHorizontal: 15 * w,
          },
        ]}
      >
        <Text
          style={{
            top: 30 * h,
            left: 20 * w,
            fontFamily: "RamblaRegular",
            color: "#500C86",
            fontSize: RFPercentage(2),
          }}
        >
          Ativo:{item.asset}
        </Text>
        <Text
          style={{
            top: 40 * h,
            left: 20 * w,
            fontFamily: "RamblaRegular",
            color: "#500C86",
            fontSize: RFPercentage(2),
          }}
        >
          Quantidade:{item.quantity}
        </Text>
        <Text
          style={{
            top: 10 * h,
            left: 200 * w,
            fontFamily: "RamblaRegular",
            color: "#500C86",
            fontSize: RFPercentage(2),
          }}
        >
          Valor total:{item.totalValue}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{ alignItems: "center", flex: 1, backgroundColor: "#fff" }}
    >
      <StatusBar></StatusBar>
      <HeaderBar {...headerbar}></HeaderBar>
      <View
        style={[
          {
            top: 80 * h,
            width: 400 * w,
            height: 450 * h,
            backgroundColor: "#fff",
            borderRadius: 10,
          },
          { elevation: 10, shadowColor: "#171717", shadowOpacity: 1 },
        ]}
      >
        <View
          style={[
            {
              width: 400 * w,
              height: 450 * h,
              backgroundColor: "#fff",
              borderRadius: 10,
            },
            { elevation: 10, shadowColor: "#171717", shadowOpacity: 1 },
          ]}
        >
          <Text
            style={{
              fontFamily: "RamblaRegular",
              color: "#572BA9",
              fontSize: RFPercentage(5),
              left: 20 * w,
              top: 15 * h,
            }}
          >
            R$6591.33
          </Text>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{ top: 30 * h, width: 380 * w, height: 350 * h }}
              data={assets}
              renderItem={renderItem}
            ></FlatList>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
