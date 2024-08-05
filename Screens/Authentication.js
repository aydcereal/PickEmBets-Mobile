import { StyleSheet, Text, View, Image } from "react-native";
import heroImg from "../assets/Logos/hero.png";
import CustomButton from "../Components/customButton";

export function Authentication() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={heroImg} />
      <View style={styles.innerContainer}>
        <CustomButton color={"black"}>LOGIN</CustomButton>
        <CustomButton color={"red"}>SIGN UP</CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 366,
    height: 366,
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
