import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
}

const Button = ({ children, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
      <Image
        style={styles.icon}
        source={require("../../assets/images/arrowRight.png")}
      />
    </TouchableOpacity>
  );
};
export default React.memo(Button);
