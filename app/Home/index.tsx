import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";
import Input from "../../components/input/index";
const Home = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Input pressable onPress={() => router.push("/Search")} />
    </View>
  );
};
export default React.memo(Home);
