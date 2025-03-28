import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.green,
    flex: 1,
    padding: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});

export default styles;
