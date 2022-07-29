import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "./src/components/Button";
import { TextField } from "./src/components/TextField";
import { ThemeProvider } from "./src/config/theme";

function Start() {
  return <Text>@</Text>;
}

export default function App() {
  function handlePress() {
    console.log("Hello I'm working!");
  }
  return (
    <ThemeProvider>
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <TextField placeholder="Simple Text Input" startIcon={<Start />} />
        <TextField multiline numberOfLines={4} placeholder="Text Area Input" />
        <Button color="green" onPress={handlePress}>
          Working Button
        </Button>
        <Button disabled onPress={handlePress} color="red">
          Disabled Button
        </Button>
      </ScrollView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
  },
});
