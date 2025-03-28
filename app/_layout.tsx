import { Stack } from "expo-router";
import { useEffect } from "react";
import { BackHandler } from "react-native";
import { useNavigation } from "expo-router";

export default function Layout() {
  const navigation = useNavigation();

  useEffect(() => {
    // Disable Android Hardware Back Button
    const preventBack = () => true;
    BackHandler.addEventListener("hardwareBackPress", preventBack);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", preventBack);
    };
  }, []);

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#f8f8f8" },
        headerTintColor: "#333",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Splash/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="Home/index"
        options={{
          title: "Home",
          headerBackVisible: false,
          gestureEnabled: false, // Disable swipe back on iOS
        }}
      />
    </Stack>
  );
}
