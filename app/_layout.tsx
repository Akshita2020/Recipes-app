import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="Splash/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="Home/index"
        options={{ title: "Home"}}
      />
    </Stack>
  );
}
