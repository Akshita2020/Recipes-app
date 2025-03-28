import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    borderRadius: 10,
    padding: 15,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});

export default styles;
