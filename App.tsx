import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Header from "./shared/Header";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [number, setNumber] = useState<null | number>(null);
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);

  const handleReplay = () => {
    setNumber(null);
    setStartGame(false);
    setGameOver(false);
    setRounds(0);
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff" />
      <Header />
      {gameOver ? (
        <>
          <GameOverScreen
            number={number}
            rounds={rounds}
            handleReplay={handleReplay}
          />
        </>
      ) : (
        <>
          {number !== null && startGame ? (
            <GameScreen
              userChoice={number}
              setGameOver={setGameOver}
              rounds={rounds}
              setRounds={setRounds}
            />
          ) : (
            <StartGameScreen
              number={number}
              setNumber={setNumber}
              startGame={startGame}
              setStartGame={setStartGame}
            />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
