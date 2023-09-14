import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Modal,
  Button,
  StyleSheet,
  Image
} from "react-native-web";
import styles from "../styles/style";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={stylez.textbox}>
        <Image
          source={require("../images/Background.jpeg")}
          style={{ width: 50, height: 50 }}
        />
        <Image
          source={{
            uri:
              "https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg"
          }}
          style={{ width: 50, height: 50 }}
        />
      </View>
    </View>
  );
};

const stylez = StyleSheet.create({
  textbox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default App;
