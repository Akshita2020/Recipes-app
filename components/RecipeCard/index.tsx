import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

interface RecipeProps {
  title: string;
  image: string;
  author: { image: string; name: string };
  servings: number;
  rating: number;
  time: string;
}

const RecipeCard = ({ title, image, author, rating, time }: RecipeProps) => {
  return (
    <View style={styles.container}>                           
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <View style={styles.row}>
          <Image style={styles.authorImage} source={{ uri: author?.image }} />
          <Text style={styles.footerText}>{author?.name}</Text>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.timerIcon}
            source={require("../../assets/images/timer.png")}
          />
          <Text style={styles.footerText}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(RecipeCard);
