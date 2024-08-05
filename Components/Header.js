import { View, Image, StyleSheet } from "react-native";

import heroImg from "../assets/Logos/hero.png";
import Logo from "../assets/Logos/blackLogo.png";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 66,
    marginTop: 14,
  },
  logo: { height: 64, width: 103 },
  menuButton: {
    padding: 10,
  },
});
