import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { Dispatch, SetStateAction, useState, useEffect } from "react";

import Button from "../shared/Button";
import { globalStyles, accentColor, mainColor } from "../styles/global";
import ConfirmCard from "../components/ConfirmCard";

type Props = {
  number: number | null;
  setNumber: Dispatch<SetStateAction<number | null>>;
  startGame: boolean;
  setStartGame: Dispatch<SetStateAction<boolean>>;
};

const StartGameScreen = ({
  number,
  setNumber,
  startGame,
  setStartGame,
}: Props) => {
  const [textNumber, setTextNumber] = useState("");

  useEffect(() => {
    setTextNumber("");
  }, [number]);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1 }}>
        <View>
          {/* Main Section */}

          <View style={styles.main}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Enter a number between 1 and 100:
            </Text>
            <Text style={{ textAlign: "center" }}>
              And I will try to guess it. (Might take me a few guesses. I mean
              I'm not perfect.
            </Text>
            <Text style={{ textAlign: "center" }}>No one is)</Text>
            <TextInput
              style={styles.input}
              keyboardType={"number-pad"}
              value={textNumber}
              blurOnSubmit={true}
              autoCapitalize={"none"}
              maxLength={2}
              onChangeText={(val) => setTextNumber(val)}
            />
            <View style={globalStyles.buttonSection}>
              <Button
                title="Reset"
                color={accentColor}
                onPress={() => {
                  setTextNumber("");
                  setNumber(null);
                }}
              />
              <Button
                title="Continue"
                color={mainColor}
                onPress={() => {
                  const numberInt = parseInt(textNumber);
                  if (isNaN(numberInt)) {
                    // console.log("Please Select a valid number");
                    Alert.alert(
                      "Please Select a valid number",
                      "Number must be in between 1 and 100",
                      [
                        {
                          text: "Got it man",
                        },
                      ]
                    );
                    return;
                  }

                  if (numberInt < 1 || numberInt > 100) {
                    // console.log("Number must be between 1 and 100");
                    Alert.alert(
                      "Number must be between 1 and 100",
                      "Number entered is either greater lesser than 1 or greater than 100",
                      [
                        {
                          text: "Understood",
                        },
                      ]
                    );
                    return;
                  }

                  Keyboard.dismiss();
                  return setNumber(numberInt);
                }}
              />
            </View>
          </View>
          {number && (
            <ConfirmCard number={number} setStartGame={setStartGame} />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  main: {
    padding: 20,
    borderRadius: 6,
    elevation: 2,
    borderColor: "#ccc",
    shadowColor: "#ccc",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    marginHorizontal: 40,
    marginTop: 30,
    alignSelf: "center",
  },
  input: {
    minHeight: 30,

    borderBottomWidth: 1,
    borderBottomColor: "#333",
    marginBottom: 20,
  },
});
