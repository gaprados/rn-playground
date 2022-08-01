import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ChecklistType } from "./src/components/ChecklistType";
import { ThemeProvider } from "./src/config/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

interface ItemProps {
  title: string;
  icon: any;
  status: "draft" | "pending" | "in_progress" | "done";
  statusDate?: any;
}

const temp_items: ItemProps[] = [
  {
    title: "Reparo automotivo",
    icon: (
      <MaterialCommunityIcons name="clipboard-text-search-outline" size={32} />
    ),
    status: "draft",
    statusDate: "Hoje",
  },
  {
    title: "Inspeção cautelar",
    icon: <MaterialCommunityIcons name="wrench-outline" size={32} />,
    status: "pending",
  },
  {
    title: "Mecânico",
    icon: <MaterialCommunityIcons name="wrench-outline" size={32} />,
    status: "in_progress",
  },
  {
    title: "Qualidade",
    icon: <MaterialCommunityIcons name="shield-check-outline" size={32} />,
    status: "done",
    statusDate: "3 dias atrás",
  },
];
function TempComponent1() {
  return <Text>Component 1</Text>;
}
function TempComponent2() {
  return <Text>Component 1</Text>;
}
function TempComponent3() {
  return <Text>Component 1</Text>;
}

function Home() {
  return (
    <View>
      <ScrollView horizontal style={styles.view}>
        {temp_items.map((item) => (
          <ChecklistType
            key={item.title}
            title={item.title}
            icon={item.icon}
            status={item.status}
            statusDate={item?.statusDate}
            destination="Home"
          />
        ))}
      </ScrollView>
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
    paddingHorizontal: 22,
    flexDirection: "row",
  },
});
