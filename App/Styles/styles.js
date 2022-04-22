import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  //Login.js
  loginScreenContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  loginFormView: {
    flex: 1,
  },
  loginLogoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: "2%",
    marginBottom: "10%",
    textAlign: "center",
  },
  loginText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  loginFormTextInput: {
    width: "85%",
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    padding: 10,
    marginTop: 15,
  },
  loginButton: {
    height: 43,
    width: "85%",
    backgroundColor: "#3897f1",
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
  },

  //BottomTabs.js
  bottomTabNavigator: {
    color: "#19A04FB5",
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
    backgroundColor: "#19A04FB5",
  },
  characterContainer: {
    flex: 5,
    backgroundColor: "powderblue",
    width: "98%",
    padding: 5,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  shopContainer: {
    flex: 1,
    width: "98%",
    flexDirection: "row",
    backgroundColor: "skyblue",
    justifyContent: "space-between",
  },
  moneyLabel: {
    alignSelf: "center",
    backgroundColor: "silver",
  },
  shopButton: {
    alignSelf: "center",
    backgroundColor: "silver",
  },
  // moneyLabel: {
  //   position: "relative",
  //   backgroundColor: "#859a9b",
  //   borderRadius: 15,
  //   padding: 10,
  //   marginRight: "160%",
  //   top: "52%",
  //   left: "8%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   shadowColor: "#303838",
  //   shadowOffset: { width: 0, height: 5 },
  //   shadowRadius: 10,
  //   shadowOpacity: 0.35,
  // },
  // shopButton: {
  //   backgroundColor: "#859a9b",
  //   borderRadius: 15,
  //   padding: 10,
  //   marginTop: "50%",
  //   marginBottom: "-25%",
  //   marginLeft: "150%",
  //   top: "52%",
  //   right: "8%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   shadowColor: "#303838",
  //   shadowOffset: { width: 0, height: 5 },
  //   shadowRadius: 10,
  //   shadowOpacity: 0.35,
  // },
  //Modal.js - store
  listModal: {
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    marginBottom: 5,
  },
  buttonModal: {
    width: "20%",
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#ebebeb",
    padding: 10,
    justifyContent: "center",
  },
  buttonModalActive: {
    backgroundColor: "#e6838d",
  },
  textModal: {
    fontSize: 16,
  },
  textModalActive: {
    color: "#ffffff",
  },
  itemRenderModal: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "steelblue",
  },
  itemData: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemLogo: {
    padding: 50,
    backgroundColor: "skyblue",
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemBody: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    backgroundColor: "silver",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemStatus: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    justifyContent: "center",
    backgroundColor: "gold",
  },
  modalcontainer: {
    flex: 1,
  },
  modalItemType: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  modalItem: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  modalTitle: {
    fontSize: 32,
  },

  //
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
