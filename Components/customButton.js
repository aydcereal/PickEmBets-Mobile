import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../Constants/colors";
import { useState } from "react";
import { useFonts } from "expo-font";

function CustomButton({ onPress, color, children }) {
  const [backgroundColor, setBackgroundColor] = useState(color);

  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/Fonts/BebasNeue.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: backgroundColor },
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontSize: 24,
    color: "white",
    fontFamily: "BebasNeue",
  },
});
