import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import heroImg from "../assets/Logos/hero.png";
import CustomButton from "../Components/customButton";
import { useFonts } from "expo-font";
import { useRef, useState } from "react";

export function SignUp({ navigation }) {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/Fonts/BebasNeue.ttf"),
  });

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [userIsTaken, setUserIsTaken] = useState(false);
  const [emailUsed, setEmailIsUsed] = useState(false);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign Up</Text>
        {userIsTaken && (
          <Text style={styles.errorText}>Username is already taken.</Text>
        )}
        <TextInput
          ref={usernameRef}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          style={[styles.input, { borderColor: userIsTaken ? "red" : null }]}
          placeholder="Username"
          onEndEditing={(e) => {
            console.log(e.nativeEvent.text);

            if (e.nativeEvent.text === "Jordy") {
              setUserIsTaken(true);
            } else {
              setUserIsTaken(false);
            }
          }}
        ></TextInput>
        {emailUsed && (
          <Text style={styles.errorText}>
            This email already has an account.
          </Text>
        )}
        <TextInput
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          style={[styles.input, { borderColor: emailUsed ? "red" : null }]}
          onEndEditing={(e) => {
            console.log(e.nativeEvent.text);

            if (e.nativeEvent.text === "Jordyfigueroa93@icloud.com") {
              setEmailIsUsed(true);
            } else {
              setEmailIsUsed(false);
            }
          }}
          placeholder="Email"
        ></TextInput>

        <TextInput
          ref={passwordRef}
          returnKeyType="next"
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
        ></TextInput>
        <TextInput
          ref={confirmPasswordRef}
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
    borderWidth: 1,
  },
  buttonSpace: {
    marginVertical: 55,
  },
  errorText: {
    textAlign: "center",
  },
});
