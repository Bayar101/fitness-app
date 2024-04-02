import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignIn from "./app/screens/SignIn";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {screen === "welcome" && (
        <WelcomeScreen onPress={() => setScreen("signIn")} />
      )}
      {screen === "signIn" && <SignIn />}
    </View>
    // <SafeAreaView onLayout={onLayoutRootView} styles={styles.container}>
    //   <WelcomeScreen />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    color: "#fff",
  },
});
