import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Colors } from "../Constants/colors";
import { useState } from "react";
import { useFonts } from "expo-font";

function CustomButton({ onPress, bgColor, fColor, children, disabled }) {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/Fonts/BebasNeue.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: bgColor },
        disabled && styles.disabledButton,
      ]}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: fColor }]}>{children}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: 12,
    margin: 4,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.7,
  },

  text: {
    fontSize: 24,
    color: "white",
    fontFamily: "BebasNeue",
  },
  disabledButton: {
    backgroundColor: "gray",
  },
});
