import React from "react";
import { TextInput, Image, View, Pressable, Text } from "react-native";
import styles from "./styles";
import colors from "@/constants/colors";

interface InputProps {
  showSearchIcons?: boolean;
  placeholder?: string;
  pressable?: boolean;
  onPress?: () => void;
  style?: object;
}

const Input = ({
  showSearchIcons = true,
  placeholder = "Search recipe",
  pressable,
  onPress,
  style,
}: InputProps) => {
  const renderInput = () => (
    <View style={styles.inputContainer}>
      {showSearchIcons ? (
        <Image
          style={styles.icon}
          source={require("../../assets/images/search.png")}
        />
      ) : null}
      <TextInput
        editable={!pressable}
        placeholderTextColor={colors.lightGrey}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
  if (pressable) {
    return (
      <Pressable onPress={onPress} style={[styles.inputContainer, style]}>
        renderInput()
        <Text>{placeholder}</Text>
      </Pressable>
    );
  }
  return renderInput();
};

export default React.memo(Input);
