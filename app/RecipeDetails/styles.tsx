import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(217,217,217,0.5)",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 4,
  },
  key: {
    fontSize: 12,
    color: colors.black,
    textTransform: "capitalize",
  },
  value: {
    fontSize: 12,
    color: colors.lightGrey2,
  },
});

export default styles;
