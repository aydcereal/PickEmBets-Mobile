import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Authentication } from "./Screens/Authentication";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Header } from "./Components/Header";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Authentication"
                component={Authentication}
                options={{
                  header: (props) => <Header />,
                  headerTitleAlign: "left",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
