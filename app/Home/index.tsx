import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";
import Input from "../../components/input/index";
const Home = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Input />
      <Text onPress={() => router.push("/Search")}>Go to search</Text>
    </View>
  );
};
export default React.memo(Home);
