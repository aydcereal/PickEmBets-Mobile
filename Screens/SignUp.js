import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import CustomButton from "../Components/customButton";
import { useFonts } from "expo-font";
import { useEffect, useRef, useState, useContext } from "react";
import AuthContext from "../context/auth-context";

export function SignUp({ navigation }) {
  const { checkIfEmailExists, isDisplayNameUnique } = useContext(AuthContext);
  const [validEmail, setEmailValid] = useState(true);
  const [userIsTaken, setUserIsTaken] = useState(null);
  const [emailUsed, setEmailIsUsed] = useState(null);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/Fonts/BebasNeue.ttf"),
  });

  const handleUserNameCheck = async () => {
    if (userDetails.userName) {
      const isUserNameUnique = await isDisplayNameUnique(userDetails.userName);
      console.log(isUserNameUnique);

      setUserIsTaken(!isUserNameUnique);
    }
  };

  const handleEmailCheck = async () => {
    const emailExists = await checkIfEmailExists(userDetails.email);
    if (userDetails.email === "Exists") {
      setEmailIsUsed(emailExists);
    } else if (emailExists === "Invalid") {
      setEmailValid(false);
    }
  };

  function isPasswordValid(password) {
    let length = true;
    let upperCase = true;
    let LowerCase = true;

    if (password.length < 8) {
      length = false;
    }
    if (!/[A-Z]/.test(password)) {
      upperCase = false;
    }
    if (!/[a-z]/.test(password)) {
      LowerCase = false;
    }
    console.log("password", length && upperCase && LowerCase);

    setPasswordIsValid(length && upperCase && LowerCase);
  }

  const submitHandler = async () => {
    handleUserNameCheck();
    handleEmailCheck();
    isPasswordValid(userDetails.password);
  };

  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    setUserIsTaken(false);
    setEmailIsUsed(false);
    setEmailValid(true);
    setPasswordIsValid(true);
  }, [userDetails]);

  useEffect(() => {
    validateForm();
  }, [userDetails, userIsTaken, emailUsed]);

  const validateForm = async () => {
    const { password, confirmPassword } = userDetails;

    setIsButtonDisabled(
      password !== confirmPassword || userIsTaken || emailUsed
    );
  };

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
          style={[
            styles.input,
            { borderColor: userIsTaken ? "red" : null },
            { borderWidth: userIsTaken ? 3 : 1 },
          ]}
          placeholder="Username"
          onChangeText={(text) =>
            setUserDetails((prevState) => ({ ...prevState, userName: text }))
          }
        ></TextInput>
        {emailUsed && (
          <Text style={styles.errorText}>
            This email already has an account.
          </Text>
        )}
        {!validEmail && <Text style={styles.errorText}>Email is invalid</Text>}
        <TextInput
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          style={[
            styles.input,
            { borderColor: emailUsed || !validEmail ? "red" : null },
            { borderWidth: emailUsed || !validEmail ? 3 : 1 },
          ]}
          onChangeText={(text) =>
            setUserDetails((prevState) => ({ ...prevState, email: text }))
          }
          placeholder="Email"
        ></TextInput>

        <TextInput
          ref={passwordRef}
          returnKeyType="next"
          onChangeText={(text) =>
            setUserDetails((prevState) => ({ ...prevState, password: text }))
          }
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          style={[
            styles.input,
            { borderColor: !passwordIsValid ? "red" : null },
            { borderWidth: !passwordIsValid ? 3 : 1 },
          ]}
          placeholder="password"
          secureTextEntry={true}
        ></TextInput>
        <TextInput
          ref={confirmPasswordRef}
          style={[
            styles.input,
            { borderColor: !passwordIsValid ? "red" : null },
            { borderWidth: !passwordIsValid ? 3 : 1 },
          ]}
          onChangeText={(text) =>
            setUserDetails((prevState) => ({
              ...prevState,
              confirmPassword: text,
            }))
          }
          placeholder="Confirm Password"
          secureTextEntry={true}
        ></TextInput>
        {!passwordIsValid && (
          <>
            <Text style={styles.errorText}>Password is Invalid</Text>
            <Text style={styles.errorText}>At least 1 uppercase letter</Text>
            <Text style={styles.errorText}>At least 1 lowercase letter</Text>
            <Text style={styles.errorText}>At least 1 number</Text>
          </>
        )}
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
