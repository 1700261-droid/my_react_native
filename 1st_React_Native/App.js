import React, {use, useRef} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Platform,
  TouchableOpacity,
  Animated,
  PanResponder,
} from "react-native";

const onPressButton = () =>{
  Alert.alert("Button Pressed!");
};

const App = () => {
 const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

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

           <View style={styles.boxContainer}>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.moveableBox}/>
      </Animated.View>
    </View>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "powderblue"
  },
  moveableBox: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  boxContainer: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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