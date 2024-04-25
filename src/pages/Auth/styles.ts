import colors from "../../styles/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  logoTitle: {
    fontSize: 28,
    marginBottom: 4,
  },
  logoCaption: {
    color: colors.gray,
    marginBottom: 16,
  },

  input: {
    alignSelf: "stretch",

    marginHorizontal: 16,
    marginVertical: 4,

    paddingHorizontal: 16,
    paddingVertical: 16,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    borderRadius: 12,
    fontSize: 16,
  },

  button: {
    alignSelf: "stretch",
    backgroundColor: colors.primary,

    marginHorizontal: 16,
    marginTop: 16,

    paddingHorizontal: 16,
    paddingVertical: 16,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    borderRadius: 12,
  },
  buttonText: {
    color: colors.white,

    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.5,

    fontSize: 16,
    fontWeight: "500",
  },
});
