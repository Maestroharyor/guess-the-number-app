import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.header}>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        Guess The Number Game
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f4511e",
    color: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
