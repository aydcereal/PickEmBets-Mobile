import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import heroImg from "../assets/Logos/hero.png";
import CustomButton from "../Components/customButton";
import { useFonts } from "expo-font";

export function SignUp({ navigation }) {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/Fonts/BebasNeue.ttf"),
  });
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="Username"></TextInput>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        ></TextInput>
        <View style={styles.buttonSpace}>
          <CustomButton bgColor={"red"} fColor={"white"}>
            SIGN UP
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 40,
    fontFamily: "BebasNeue",
    margin: 20,
  },
  input: {
    textAlign: "center",
    fontFamily: "BebasNeue",
    fontSize: 24,
    padding: 12,
    margin: 4,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#D9D9D9",
  },
  buttonSpace: {
    marginVertical: 55,
  },
});
