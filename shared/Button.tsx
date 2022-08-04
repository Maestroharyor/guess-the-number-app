import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {
  title: string;
  color?: string;
  onPress: () => void;
};

const Button = ({ title, color, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 20,
          marginHorizontal: 10,
          backgroundColor: color ? color : "#f4511e",
        }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
