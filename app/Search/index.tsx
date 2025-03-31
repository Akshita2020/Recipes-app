import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Input from "../../components/input/index";

const Search = () => {
  return (
    <View style={styles.container}>
      <Input />
    </View>
  );
};
export default React.memo(Search);
