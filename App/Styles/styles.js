import { StyleSheet } from 'react-native';

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
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: '40%',
    marginTop: 10,
  },
  header: {
    width: '100%',
    height: '15%',
    //padding: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7DCC65',
  },
  teacherCards: {
    width: '50%',
    height: '40',
    padding: 5,
  },
  teacherCardsSeparation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
