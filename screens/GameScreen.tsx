import { Alert, StyleSheet, Text, View } from "react-native";
import React, {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { accentColor, globalStyles, mainColor } from "../styles/global";
import Button from "../shared/Button";

type Props = {
  userChoice: number | null;
  setGameOver: Dispatch<SetStateAction<boolean>>;
  rounds: number;
  setRounds: Dispatch<SetStateAction<number>>;
};

const generateRandomNumber: any = (
  min: number,
  max: number,
  exclude: number
) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum == exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return randomNum;
};

const GameScreen = ({ userChoice, setRounds, rounds, setGameOver }: Props) => {
  const [guessedNumber, setGuessedNumber] = useState(
    generateRandomNumber(0, 100, userChoice)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const lesserPressed = () => {
    if (userChoice !== null && guessedNumber < userChoice) {
      //   console.log("That's a lie and you know it");
      Alert.alert(
        "That's a lie and you know it",
        "We both know you selected a greater value than what I guessed naughty...",
        [
          {
            text: "You caught me",
          },
        ]
      );
      return;
    }

    currentHigh.current = guessedNumber;
    const nextNumberGenerated = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      guessedNumber
    );
    setGuessedNumber(nextNumberGenerated);
  };
  const greaterPressed = () => {
    if (userChoice !== null && guessedNumber > userChoice) {
      //   console.log("That's a lie and you know it");
      Alert.alert(
        "That's a lie and you know it",
        "We both know you selected a lesser value than what I guessed naughty...",
        [
          {
            text: "You caught me",
          },
        ]
      );
      return;
    }

    currentLow.current = guessedNumber;
    const nextNumberGenerated = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      guessedNumber
    );
    setGuessedNumber(nextNumberGenerated);
  };

  useEffect(() => {
    if (guessedNumber === userChoice) {
      setGameOver(true);
    }
  });

  useEffect(() => {
    let newRounds = (rounds += 1);
    setRounds(newRounds);
  }, [guessedNumber]);

  return (
    <View>
      <View>
        <Text style={{ fontSize: 20, alignSelf: "center", marginTop: 50 }}>
          Computer's Guess:
        </Text>
        <View style={[globalStyles.numberConfirm, styles.numberConfirm]}>
          <Text style={{ fontSize: 30 }}>{guessedNumber}</Text>
        </View>

        <View style={[globalStyles.buttonSection, globalStyles.card]}>
          <Button
            title="Lower"
            color={accentColor}
            onPress={() => {
              lesserPressed();
            }}
          />
          <Button
            title="Greater"
            color={mainColor}
            onPress={() => {
              greaterPressed();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  numberConfirm: {
    alignSelf: "center",
  },
});
