import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: colors.lightGrey,
    borderWidth: 1, 
    padding: 10,
    marginVertical: 16,
  },
  input: {
    color: colors.black,
    fontSize: 14,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 16,
  },
});

export default styles;
