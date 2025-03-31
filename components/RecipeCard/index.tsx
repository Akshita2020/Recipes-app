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
      <View style={styles.row}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
        />
      </View>
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
