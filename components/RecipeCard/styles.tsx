import colors from "@/constants/colors";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorImage: {
    width: 25,
    height: 25,
    marginRight: 8,
    borderRadius: 20,
  },
  footerText: {
    color: colors.lightGrey2,
    fontSize: 12,
  },
  timerIcon: {
    width: 17,
    height: 17,
    marginRight: 8,
  },
  container: {
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 16,
    width: width * 0.6,
    //IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.42,
    shadowRadius: 5.46,
    // Android
    elevation: 9,
  },
});

export default styles;
