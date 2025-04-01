import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

interface cardProps {
  title: string;
  image: string;
  time: string;
  style?: object;
}

const Card = ({ title, time, style, image }: cardProps) => {
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
      <Text style={styles.label}>Title</Text>

      <Text style={styles.value}>{time}</Text>
    </View>
  );
};

export default React.memo(Card);
