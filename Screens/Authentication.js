import { StyleSheet, Text, View, Image } from "react-native";
import heroImg from "../assets/Logos/hero.png";
import CustomButton from "../Components/customButton";

export function Authentication({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={heroImg} />
      <View style={styles.innerContainer}>
        <CustomButton bgColor={"black"} fColor={"white"}>
          LOGIN
        </CustomButton>
        <CustomButton
          onPress={() => navigation.navigate("SignUp")}
          bgColor={"red"}
          fColor={"white"}
        >
          SIGN UP
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 366,
    height: 366,
    margin: 80,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  innerContainer: {
    width: "100%",
  },
});
