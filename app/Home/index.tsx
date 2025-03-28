import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Home = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};
export default React.memo(Home);
