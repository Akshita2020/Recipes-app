import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 14,
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bigTitle: {
    color: colors.white,
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
  subTitle: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 64,
    marginTop: 20,
  },
});

export default styles;
