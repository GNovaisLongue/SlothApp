import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },

  //Profile.js
  label1: {
    position: "absolute",
    left: "10%",
  },
  label2: {
    position: "absolute",
    right: "10%",
  },
  label3: {
    position: "absolute",
    alignContent: "center",
  },
  header: {
    width: "100%",
    height: "12%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#7DCC65",
  },
  shopContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  moneyLabel: {
    position: "relative",
    backgroundColor: "#859a9b",
    borderRadius: 15,
    padding: 10,
    marginRight: "160%",
    top: "52%",
    left: "8%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  shopButton: {
    backgroundColor: "#859a9b",
    borderRadius: 15,
    padding: 10,
    marginTop: "50%",
    marginBottom: "-25%",
    marginLeft: "150%",
    top: "52%",
    right: "8%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },

  //
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: "40%",
    marginTop: 10,
  },
  teacherCards: {
    width: "50%",
    height: "40",
    padding: 5,
  },
  teacherCardsSeparation: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
