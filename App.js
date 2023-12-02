import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js Hello!</Text>
      <WelcomeScreen x={5} y={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
