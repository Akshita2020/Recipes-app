import React from "react";
import { TextInput, Image, View } from "react-native";
import styles from "./styles";
import colors from "@/constants/colors";

interface InputProps {
  showSearchIcons?: boolean;
  placeholder?: string;
}

const Input = ({
  showSearchIcons = true,
  placeholder = "Search recipe",
}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      {showSearchIcons ? (
        <Image
          style={styles.icon}
          source={require("../../assets/images/search.png")}
        />
      ) : null}
      <TextInput
        placeholderTextColor={colors.lightGrey}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

export default React.memo(Input);
