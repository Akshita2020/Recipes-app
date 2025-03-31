import { Stack } from "expo-router";
import { useEffect } from "react";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import { BackHandler, Image, Pressable, StyleSheet, View } from "react-native";

export default function Layout() {
  useEffect(() => {
    // Disable Android Hardware Back Button
    const preventBack = () => true;
    BackHandler.addEventListener("hardwareBackPress", preventBack);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", preventBack);
    };
  }, []);

  const BackButton = (props: any) => (
    <Pressable onPress={props.onPress}>
      <Image
        style={styles.backButton}
        source={require("../assets/images/back.png")}
      />
    </Pressable>
  );

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ffffff", 
    },
  };

  return (
    <View style={{ flex: 1, backgroundColor: Theme.colors.background }}>
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.colors.background }, // Apply to header
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: Theme.colors.background }, // Apply to screens
        }}
      >
        <Stack.Screen name="Splash/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="Home/index"
          options={{
            headerTitle: "Home",
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Search/index"
          options={{
            headerTitle: "Search",
            headerLeft: (props) => <BackButton {...props} />,
          }}
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 24,
    height: 24,
    margin: 16,
  },
});
