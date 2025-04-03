import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    // color: 'rgba(0,0,0,0.5)',
    color: colors.green,
    fontWeight: "bold",
    paddingHorizontal: 10,
    padding: 8,
    textTransform: "capitalize",
  },
  selectedItem: {
    color: colors.white,
  },
  itemContainer: {
    marginVertical: 8,
    marginRight: 17,
  },
  selectedItemContainer: {
    backgroundColor: colors.green,
    borderRadius: 10,
  },
});

export default styles;
