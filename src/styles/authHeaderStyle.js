import { StyleSheet } from "react-native";
export const authHeader = (width, height) =>
  StyleSheet.create({
    mainView: {
      alignItems: "center",
      justifyContent: "center",
      width: width + width * 0.15,
      height: height * 0.33,
      borderBottomRightRadius: width + width * 0.6,
      borderBottomLeftRadius: width + width * 0.6,
      zIndex: 2
    },

    logoAndNameView: {
      alignItems: "center",
      justifyContent: "center",
      width: width + 40,
      height: height * 0.35,
      borderBottomRightRadius: width + width * 0.5,
      borderBottomLeftRadius: width + width * 0.5,
      backgroundColor: "#009092",
      zIndex: 2
    },

    nameText: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff"
    },

    extendedHeaderView: {
      width: 100 + "%",
      height: 120 + "%",
      borderBottomRightRadius: width + width,
      borderBottomLeftRadius: width + width,
      backgroundColor: "#78B7B1",
      position: "absolute",
      zIndex: 1
    }
  });
