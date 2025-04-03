import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import Title from "@/components/Title";

const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {};
  const nutrition = item?.nutrition;
  const nutritionKeys = Object.keys(nutrition || {});
  console.log(nutrition);
  console.log(nutritionKeys);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
      <Title text={item?.name} />
      {nutritionKeys?.map(key=>(
        <View key={key} style={styles.row}>
          <Text style={styles.key}>{key}</Text>
          <Text style={styles.value}>{nutrition[key]}</Text>
          
          </View>
      ))}
    </View>
  );
};
export default React.memo(RecipeDetails);
