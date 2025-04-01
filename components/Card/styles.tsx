import colors from "@/constants/colors";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -60,
    alignSelf: "center",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
  },

  container: {
    borderRadius: 12,
    marginTop: 60,
    marginRight: 16,
    backgroundColor: 'rgba(217,217,217,0.5)',
    padding: 10,
    marginVertical: 32,
    width: width * 0.4,
  },
  label: {
    color: colors.lightGrey2,
    fontSize: 12, 
    marginTop: 8,
    marginBottom: 4,
  },
  value: {
    color: colors.grey,
    fontSize: 11,
    fontWeight: "bold",
  },
});

export default styles;
