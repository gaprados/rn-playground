import { ScrollView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ChecklistType } from "./src/components/ChecklistType";
import { ThemeProvider } from "./src/config/theme";

interface ItemProps {
  title: string;
  icon: any;
  status: "draft" | "pending" | "in_progress" | "done";
  statusDate?: any;
}

const temp_items: ItemProps[] = [
  {
    title: "Conferência",
    icon: (
      <MaterialCommunityIcons name="clipboard-text-search-outline" size={32} />
    ),
    status: "draft",
    statusDate: "Hoje",
  },
  {
    title: "Mecânico",
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

export default function App() {
  return (
    <ThemeProvider>
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View>
          <ScrollView horizontal style={styles.view}>
            {temp_items.map((item) => (
              <ChecklistType
                key={item.title}
                title={item.title}
                icon={item.icon}
                status={item.status}
                statusDate={item?.statusDate}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
  },

  view: {
    flex: 1,
    flexDirection: "row",
  },
});
