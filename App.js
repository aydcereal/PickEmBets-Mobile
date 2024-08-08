import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Authentication } from "./Screens/Authentication";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { OnlyLogoHeader, ReturnHeader } from "./Components/Headers/Header";
import { AuthProvider } from "./context/auth-context";
import { SignUp } from "./Screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <AuthProvider>
        <StatusBar style="dark" />
        <SafeAreaProvider style={styles.container}>
          <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Authentication">
                <Stack.Screen
                  name="Authentication"
                  component={Authentication}
                  options={{
                    header: (props) => <OnlyLogoHeader />,
                    headerTitleAlign: "left",
                  }}
                />
                <Stack.Screen
                  name="SignUp"
                  component={SignUp}
                  options={{
                    header: (props) => <ReturnHeader />,
                    headerTitleAlign: "left",
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
