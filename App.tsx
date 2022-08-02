import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { ThemeProvider } from "./src/config/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Badge } from "./src/components/Badge";

function Home() {
  return (
    <View style={styles.view}>
      <Badge>35,141km</Badge>
      <Badge>Flex</Badge>
      <Badge>4P</Badge>
      <Badge color="red">Rascunho</Badge>
      <Badge color="green">Concluído</Badge>
    </View>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ThemeProvider>
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </ScrollView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
