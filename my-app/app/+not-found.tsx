import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.button}>
        Go to Home screen!
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: '#fff',
  }
});