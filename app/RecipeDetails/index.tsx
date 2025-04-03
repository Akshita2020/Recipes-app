import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import styles from "./styles";
import Title from "@/components/Title";

const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {};
  const nutrition = item?.nutrition;
  const instructions = item?.instructions || [];
  const nutritionKeys = Object.keys(nutrition || {});
  console.log(nutrition);
  console.log(nutritionKeys);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
        <Title text={item?.name} />
        {nutritionKeys?.map((key) => (
          <View key={key} style={styles.row}>
            <Text style={styles.key}>{key}</Text>
            <Text style={styles.value}>{nutrition[key]}</Text>
          </View>
        ))}
        <Title
          style={{ marginTop: 32, marginBottom: 16 }}
          text="Instructions"
        />
        {nutritionKeys?.map((key, index) => (
          <View key={instructions?.id} style={styles.instructionRow}>
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.instructionText}>{instructions}</Text>
          </View>
        ))}
        {!instructions?.length ? (
          <Text style={styles.value}>No instructions available</Text>
        ) : null}
      </ScrollView>
    </View>
  );
};
export default React.memo(RecipeDetails);
