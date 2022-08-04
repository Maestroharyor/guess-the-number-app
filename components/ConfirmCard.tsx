import { StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import Button from "../shared/Button";
import { accentColor, globalStyles } from "../styles/global";

type Props = {
  number: number;
  setStartGame: Dispatch<SetStateAction<boolean>>;
};

const ConfirmCard = ({ number, setStartGame }: Props) => {
  return (
    <View style={globalStyles.card}>
      <Text>You chose the number:</Text>
      <View style={globalStyles.numberConfirm}>
        <Text style={{ fontSize: 30 }}>{number}</Text>
      </View>

      <Button
        title="Start Game"
        color={accentColor}
        onPress={() => {
          setStartGame(true);
        }}
      />
    </View>
  );
};

export default ConfirmCard;

const styles = StyleSheet.create({});
