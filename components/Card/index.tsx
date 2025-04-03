import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export interface cardProps {
  style?: object;
  time?: number;
  title?: string;
  image?: string;
  servings?: number;
  rating?: number;
  onPress?: () => void;
  author?: {
    name?: string;
    image?: string;
  };
}

const Card = ({ title, servings, style, image, onPress }: cardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
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
    </TouchableOpacity>
  );
};

export default React.memo(Card);
