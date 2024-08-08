import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import heroImg from "../assets/Logos/hero.png";
import CustomButton from "../Components/customButton";
import { useFonts } from "expo-font";
import { useEffect, useRef, useState, useContext } from "react";
import AuthContext from "../context/auth-context";

export function SignUp({ navigation }) {
  const { checkIfEmailExists, isDisplayNameUnique } = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/Fonts/BebasNeue.ttf"),
  });

  const submitHandler = async () => {
    const isEmailUnique = await checkIfEmailExists(userDetails.email);
    const isUserNameUnique = await isDisplayNameUnique(userDetails.userName);

    console.log("email", !isEmailUnique);
    console.log("user", isUserNameUnique);
  };

  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userIsTaken, setUserIsTaken] = useState(false);
  const [emailUsed, setEmailIsUsed] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    validateForm();
  }, [userDetails, userIsTaken, emailUsed]);

  function validateForm() {
    const { userName, email, password, confirmPassword } = userDetails;
    if (
      userName &&
      email &&
      password &&
      confirmPassword &&
      password == confirmPassword &&
      !userIsTaken &&
      !emailUsed
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }
  // function submitHandler() {
  //   console.log(userDetails);
  // }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign Up</Text>
        {userIsTaken && (
          <Text style={styles.errorText}>Username is already taken.</Text>
        )}
        <TextInput
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          style={[styles.input, { borderColor: userIsTaken ? "red" : null }]}
          placeholder="Username"
          onChangeText={(text) =>
            setUserDetails((prevState) => ({ ...prevState, userName: text }))
          }
          onEndEditing={(e) => {
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
          onChangeText={(text) =>
            setUserDetails((prevState) => ({ ...prevState, email: text }))
          }
          onEndEditing={(e) => {
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
          onChangeText={(text) =>
            setUserDetails((prevState) => ({ ...prevState, password: text }))
          }
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
        ></TextInput>
        <TextInput
          ref={confirmPasswordRef}
          style={styles.input}
          onChangeText={(text) =>
            setUserDetails((prevState) => ({
              ...prevState,
              confirmPassword: text,
            }))
          }
          placeholder="Confirm Password"
          secureTextEntry={true}
        ></TextInput>
        <View style={styles.buttonSpace}>
          <CustomButton
            onPress={submitHandler}
            bgColor={isButtonDisabled ? "gray" : "red"}
            fColor={"white"}
            disabled={isButtonDisabled}
          >
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
