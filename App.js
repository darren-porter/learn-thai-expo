import * as React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./navigation/BottomTabs";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...AntDesign.font,
          "os-light": require("./assets/fonts/OpenSans-Light.ttf"),
          "os-reg": require("./assets/fonts/OpenSans-Regular.ttf"),
          "os-semi-bold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
          "os-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <BottomTabs />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
