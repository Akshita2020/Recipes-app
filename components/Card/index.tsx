import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

export interface cardProps {
  style?: object;
  time?: number;
  title?: string;
  image?: string;
  servings?: number;
  rating?: number;
  author?: {
    name?: string;
    image?: string;
  };
}

const Card = ({ title, servings, style, image }: cardProps) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text numberOfLines={3} style={styles.title}>
        {title}
      </Text>
      {servings ? (
        <>
          <Text style={styles.label}>servings</Text>
          <Text style={styles.value}>{servings}</Text>
        </>
      ) : null}
    </View>
  );
};

export default React.memo(Card);
