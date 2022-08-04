import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../shared/Button";
import { globalStyles, mainColor } from "../styles/global";

type Props = {
  number: number | null;
  rounds: number;
  handleReplay: () => void;
};

const GameOverScreen = ({ number, rounds, handleReplay }: Props) => {
  return (
    <View
      style={{
        paddingVertical: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 40,
          marginVertical: 20,
          fontWeight: "bold",
        }}
      >
        Game Over
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginBottom: 6,
        }}
      >
        Ha! I guessed your number {number}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        Took me {rounds} rounds {rounds > 2 ? "though." : "only."}
      </Text>
      <Button
        title="Play Again"
        color={mainColor}
        onPress={() => {
          handleReplay();
        }}
      />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({});
