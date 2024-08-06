import { View, Image, StyleSheet } from "react-native";
import Logo from "../../assets/Logos/blackLogo.png";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../Constants/colors";
import { useNavigation } from "@react-navigation/native";

export const OnlyLogoHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

export const ReturnHeader = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.returnContainer}>
      <Ionicons
        onPress={handleBackPress}
        name="arrow-back-outline"
        size={24}
        color={Colors.primaryRed}
      />
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
  returnContainer: {},
  logo: { height: 64, width: 103 },
  menuButton: {
    padding: 10,
  },
});
