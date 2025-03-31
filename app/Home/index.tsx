import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";
const Home = () => {
  const router = useRouter()
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Welcome</Text>
      <Text onPress={()=>router.push('/Search')}>Go to search</Text>
    </View>
  );
};
export default React.memo(Home);
