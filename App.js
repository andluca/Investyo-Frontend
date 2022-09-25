import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/HomeScreen';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  let [fontsLoaded] = useFonts({
    'NixieOne': require('./assets/fonts/NixieOne.ttf'),
    'ExistenceLight': require('./assets/fonts/Existence-Light.ttf'),
    'RobotoThin': require('./assets/fonts/Roboto-Thin.ttf'),
  });
  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar/>
        <HomeScreen></HomeScreen>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
