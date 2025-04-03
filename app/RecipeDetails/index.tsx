import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import Title from "@/components/Title";

const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {};
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
      <Title text={item?.name} />
    </View>
  );
};
export default React.memo(RecipeDetails);
