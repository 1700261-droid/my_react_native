import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Platform,
  TouchableOpacity
} from "react-native";
const onPressButton = () =>{
  Alert.alert("Button Pressed!");
};
const App = () => {
  return (
    <View style={[styles.container, {flex: 1}]}>
      <View style={styles.centerArea}>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
          style={styles.image}
        />
      <Text style={[styles.blue,styles.textStyle]}>Hello World</Text>

      <View style={styles.row}>
      <View style={[styles.box, {backgroundColor: 'blue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
      </View>

     <TouchableOpacity onPress={onPressButton}>
          <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "powderblue"
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
  textStyle: {
    margin:10,
    borderWidth: 2,
    borderColor: "black",
    padding: 10
  },
  centerArea: {
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200
  },
  blue: {
    color: "blue",
    fontSize: 30
  },
  box: {
    width: 50,
    height: 50
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default App;