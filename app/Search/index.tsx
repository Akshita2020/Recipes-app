import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
    </View>
  );
};
export default React.memo(Search);
