import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Rating from "../Rating";

interface RecipeProps {
  title: string;
  image: string;
  author: { image: string; name: string };
  servings: number;
  rating: number;
  time: string;
  style?: object;
  onPress?: () => void;
}

const RecipeCard = ({
  title,
  image,
  author,
  rating,
  time,
  style,
  onPress,
}: RecipeProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Rating rating={rating} />
        </View>

        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>

      <View style={styles.footer}>
        {author ? (
          <View style={styles.row}>
            <Image style={styles.authorImage} source={{ uri: author?.image }} />
            <Text style={styles.footerText}>{author?.name}</Text>
          </View>
        ) : (
          <View />
        )}

        {time ? (
          <View style={styles.row}>
            <Image
              style={styles.timerIcon}
              source={require("../../assets/images/timer.png")}
            />
            <Text style={styles.footerText}>{`${time} mins`}</Text>
          </View>
        ) : (
          <View />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(RecipeCard);
