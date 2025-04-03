import React from "react";
import { TextInput, Image, View, Pressable } from "react-native";
import styles from "./styles";
import colors from "@/constants/colors";

interface InputProps {
  showSearchIcons?: boolean;
  pressable?: boolean;
  onPress?: () => void;
  style?: object;
  props?: object;
  autoFocus?: boolean;
}

const Input = ({
  showSearchIcons = true,
  pressable,
  onPress,
  style,
  ...props
}: InputProps) => {
  const renderInput = () => (
    <View style={styles.inputContainer}>
      {showSearchIcons && (
        <Image
          style={styles.icon}
          source={require("../../assets/images/search.png")}
        />
      )}
      <TextInput
        {...props}
        editable={!pressable}
        placeholderTextColor={colors.lightGrey}
        style={[styles.input, style]}
      />
    </View>
  );

  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput()}</Pressable>;
  }

  return renderInput();
};

export default React.memo(Input);
