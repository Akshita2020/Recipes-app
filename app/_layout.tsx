// import { Tabs } from "expo-router";
import React from "react";
// import { Platform, View, Text } from "react-native";
import Splash from "./splash";

export default function TabLayout() {
  return (
    // <Tabs
    //   screenOptions={{
    //     headerShown: false,

    //     tabBarStyle: Platform.select({
    //       ios: {
    //         // Use a transparent background on iOS to show the blur effect
    //         position: "absolute",
    //       },
    //       default: {},
    //     }),
    //   }}
    // >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: "Home",
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="explore"
    //     options={{
    //       title: "Explore",
    //     }}
    //   />
    // </Tabs>

    <Splash />
  );
}
