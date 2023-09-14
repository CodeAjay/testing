import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  textBox: {
    color: "white",
    fontSize: 35,
    backgroundColor: "gray",
    margin: 6,
    padding: 25,
    borderRadius: 10,
    height: 100,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 3,
    borderColor: "black"
  },
  textInput: {
    height: 50,
    borderWidth: 5,
    fontSize: 25,
    borderColor: "black",
    margin: 10,
    padding: 10,
    borderRadius: 8
  },
  item1: {
    fontSize: 34,
    color: "black",
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 7
  },
  item2: {
    fontSize: 20,
    color: "orange",
    flex: 1,
    margin: 2,
    textAlign: "center",
    textAlignVertical: "center"
  },
  box: {
    flexDirection: "row",
    borderWidth: 2,
    margin: 4,
    borderRadius: 5,
    borderColor: "orange",
    marginBottom: 10,
    textAlign: "center",
    textAlignVertical: "center"
  },
  button: {
    backgroundColor: "lightblue",
    color: "blue",
    fontSize: 22,
    textAlign: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    shadowColor: "blue",
    elevation: 10,
    shadowOpacity: 1
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
    margin: 10
  },
  radiobg: {
    backgroundColor: "blue",
    height: 27,
    width: 27,
    borderRadius: 15,
    margin: 4
  }
});

export default styles;
