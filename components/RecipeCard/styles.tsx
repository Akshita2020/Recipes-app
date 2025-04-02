import colors from "@/constants/colors";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "bold",
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: -40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorImage: {
    width: 25,
    height: 25,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
  },
  footerText: {
    color: colors.lightGrey2,
    fontSize: 12,
  },
  timerIcon: {
    width: 17,
    height: 17,
    marginRight: 8,
    marginLeft: 56,
  },
  container: {
    borderRadius: 10,
    marginTop: 46,
    marginRight: 16,
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 32,
    width: width * 0.7,
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
