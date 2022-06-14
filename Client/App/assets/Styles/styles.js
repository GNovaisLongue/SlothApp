import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    marginHorizontal: 4,
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
    borderColor: "#2AC477",
    backgroundColor: "#fafafa",
    padding: 10,
    marginTop: 15,
  },
  loginButton: {
    height: 43,
    width: "85%",
    backgroundColor: "#3897F1",
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
  },

  //BottomTabs.js
  bottomTabNavigator: {
    color: "#19A04FB5",
  },

  //MainMenu.js
  mainMenuLabel1: {
    position: "absolute",
    left: "10%",
  },
  mainMenuLabel2: {
    position: "absolute",
    right: "10%",
  },
  mainMenuLabel3: {
    position: "absolute",
    alignContent: "center",
  },
  mainMenuHeader: {
    width: "100%",
    height: "12%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#19A04FB5",
  },
  mainMenuCharacterContainer: {
    flex: 5,
    backgroundColor: "powderblue",
    width: "100%",
    padding: 5,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mainMenuShopContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "skyblue",
    justifyContent: "flex-end",
  },
  mainMenuMoneyLabel: {
    alignSelf: "center",
    backgroundColor: "silver",
  },
  mainMenuShopButton: {
    alignSelf: "center",
    backgroundColor: "gray",
  },

  //ModalStore.js - store
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
  //ModalPopUp - Inside ModalStore.js
  modalPopupBackground: {
    flex: 1,
    backgroundColor: "#FFFFFFA6",
    justifyContent: "center",
    alignItems: "center",
  },
  modalPopupContainer: {
    width: "80%",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 15,
    elevation: 20,
  },
  modalPopupHeader: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  modalPopupButton: {
    height: 43,
    width: "85%",
    backgroundColor: "#19A04FB5",
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
  },
  modalPopupText: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  //Classes.js
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
  classesCardroot: {
    margin: "auto",
    display: "flex",
    borderRadius: "16px",
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#fffff",
    flexDirection: "column",
    backgroundColor: "steelblue",
    alignItems: "center",
    paddingBottom: "16px",
  },
  classesCardBoxArea: {},
  classesCardContent: {},
  classesCardMediaImg: {
    width: "20%",
    height: 0,
    // marginLeft: "auto",
    // marginRight: "auto",
    // marginTop: "16px",
    // paddingBottom: "48%",
    // borderRadius: "16px",
    // backgroundColor: "#fff",
    // position: "relative",
  },

  //settings.js
  settingsItem: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 5,
  },
  settingsHeader: {
    fontSize: 32,
    backgroundColor: "#ffffff",
  },
  settingsTitle: {
    fontSize: 24,
  },
});
